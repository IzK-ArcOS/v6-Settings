<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { restart } from "$state/Desktop/ts/power";
  import { TrashIcon } from "$ts/images/general";
  import { createErrorDialog } from "$ts/process/error";
  import { deleteSelf } from "$ts/server/user/mutate";
  import { UserToken } from "$ts/stores/user";
  import Dialog from "./DeleteButton/Dialog.svelte";

  export let runtime: Runtime;

  function deleteAccount() {
    createErrorDialog(
      {
        title: "Delete ArcOS Account",
        component: Dialog,
        image: TrashIcon,
        buttons: [
          { caption: "Back to safety", action() {} },
          {
            caption: "Delete acount",
            async action() {
              await deleteSelf(UserToken.get());
              localStorage.removeItem("arcos-remembered-token");
              restart();
            },
            suggested: true,
          },
        ],
        sound: "arcos.dialog.warning",
      },
      runtime.pid,
      true,
    );
  }
</script>

<button class="delete" on:click={deleteAccount} data-contextmenu="account-delete">
  Delete account...
</button>
