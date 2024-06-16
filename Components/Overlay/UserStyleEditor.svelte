<script lang="ts">
  import { OverlayRuntime } from "$apps/Settings/ts/overlays/runtime";
  import { formatBytes } from "$ts/bytes";
  import { WarningIcon } from "$ts/images/dialog";
  import { createErrorDialog } from "$ts/process/error";
  import { ProcessStack } from "$ts/stores/process";
  import { UserDataStore } from "$ts/stores/user";
  import { onMount } from "svelte";
  import UserStyleWarning from "./UserStyleEditor/UserStyleWarning.svelte";

  export let runtime: OverlayRuntime;
  let style = "";

  onMount(() => {
    reset();

    createErrorDialog(
      {
        title: "User styles are risky!",
        component: UserStyleWarning,
        image: WarningIcon,
        buttons: [{ caption: "Understood", suggested: true, action() {} }],
      },
      runtime.pid,
      true,
    );
  });

  function apply() {
    $UserDataStore.sh.userStyle = style.replaceAll(/\<(?:\/|)(?:[A-Za-z\-]+)\>/g, "");
    closeThis();
  }

  function closeThis() {
    ProcessStack.kill(runtime.pid, true);
  }

  function reset() {
    style = $UserDataStore.sh.userStyle || "";
  }
</script>

<div class="top">
  <textarea bind:value={style} maxlength="1024"></textarea>
</div>
<div class="bottom">
  <div class="left">{formatBytes(style.length)} / 1KB</div>
  <div class="right">
    <button on:click={closeThis}>Cancel</button>
    <button on:click={reset}>Discard</button>
    <button on:click={apply} class="suggested">Apply</button>
  </div>
</div>
