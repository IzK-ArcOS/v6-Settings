<script lang="ts">
  import { OverlayRuntime } from "$apps/Settings/ts/overlays/runtime";
  import { GetUserElevation } from "$ts/elevation";
  import { WarningIcon } from "$ts/images/dialog";
  import { AccountIcon } from "$ts/images/general";
  import { createErrorDialog } from "$ts/process/error";
  import { changeUsername } from "$ts/server/user/mutate";
  import { ElevationChangeUsername } from "$ts/stores/elevation";
  import { ProcessStack } from "$ts/stores/process";
  import { UserName } from "$ts/stores/user";
  import ValueChanger from "../ValueChanger.svelte";

  export let runtime: OverlayRuntime;
  let newUsername: string;

  function cancel() {
    ProcessStack.kill(runtime.pid);
  }

  async function confirm() {
    const elevation = await GetUserElevation(ElevationChangeUsername());

    if (!elevation) return cancel();

    const changed = await changeUsername($UserName, newUsername);

    if (!changed) {
      createErrorDialog(
        {
          title: "Change failed",
          message:
            "An error occured while changing your username. Please try again later. If the problem keeps happening, please submit a bug report.",
          buttons: [{ caption: "Okay", action() {}, suggested: true }],
          image: WarningIcon,
          sound: "arcos.dialog.error",
        },
        runtime.process.parentPid,
        true
      );

      return;
    }

    createErrorDialog(
      {
        title: "Username changed!",
        message: `Your ArcOS username has been updated successfully. You will have to log in again on other devices, as their login information is now invalid.`,
        buttons: [{ caption: "Great!", action: cancel, suggested: true }],
        image: AccountIcon,
        sound: "arcos.dialog.info",
      },
      runtime.process.parentPid,
      true
    );

    cancel();
  }
</script>

<ValueChanger
  img={AccountIcon}
  {cancel}
  {confirm}
  disabled={!newUsername || $UserName == newUsername}
>
  <h3>Change Username</h3>
  <p>Enter a new username for your account:</p>
  <input type="text" bind:value={newUsername} />
</ValueChanger>
