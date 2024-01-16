<script lang="ts">
  import { OverlayRuntime } from "$apps/Settings/ts/overlays/runtime";
  import { GetUserElevation } from "$ts/elevation";
  import { PasswordIcon } from "$ts/images/general";
  import { createErrorDialog } from "$ts/process/error";
  import { changePassword } from "$ts/server/user/mutate";
  import { ElevationChangePassword } from "$ts/stores/elevation";
  import { ProcessStack } from "$ts/stores/process";
  import { UserName } from "$ts/stores/user";
  import ValueChanger from "../ValueChanger.svelte";

  let oldPassword: string;
  let newPassword: string;
  let confirmPassword: string;

  export let runtime: OverlayRuntime;

  function cancel() {
    ProcessStack.kill(runtime.pid, true);
  }

  async function confirm() {
    const elevation = await GetUserElevation(
      ElevationChangePassword(),
      ProcessStack
    );

    if (!elevation) return cancel();

    const changed = await changePassword(
      $UserName,
      oldPassword,
      newPassword,
      confirmPassword
    );

    if (!changed) {
      createErrorDialog(
        {
          title: "Change failed",
          message:
            "An error occured while changing your password. Please try again later. If the problem keeps happening, please submit a bug report.",
          buttons: [{ caption: "Okay", action() {}, suggested: true }],
          image: PasswordIcon,
          sound: "arcos.dialog.error",
        },
        runtime.process.parentPid,
        true
      );

      return;
    }

    createErrorDialog(
      {
        title: "Password changed!",
        message: `Your ArcOS password has been updated successfully. You will have to log in again on other devices, as their login information is now invalid.`,
        buttons: [{ caption: "Great!", action: cancel, suggested: true }],
        image: PasswordIcon,
        sound: "arcos.dialog.info",
      },
      runtime.process.parentPid,
      true
    );

    cancel();
  }
</script>

<ValueChanger
  img={PasswordIcon}
  {cancel}
  {confirm}
  disabled={!oldPassword || !newPassword || newPassword != confirmPassword}
>
  <h3>Change your password</h3>
  <p>Fill out the following fields to change your password:</p>
  <input
    type="password"
    bind:value={oldPassword}
    placeholder="Current password"
  />
  <input type="password" bind:value={newPassword} placeholder="New password" />
  <input
    type="password"
    bind:value={confirmPassword}
    placeholder="Confirm new password"
  />
</ValueChanger>
