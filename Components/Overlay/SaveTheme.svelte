<script lang="ts">
  import { OverlayRuntime } from "$apps/Settings/ts/overlays/runtime";
  import { ProcessStack } from "$ts/stores/process";
  import { saveCurrentTheme } from "$ts/themes";
  import ThemePreview from "../ThemePreview.svelte";
  import Desktop from "../ThemePreview/Desktop.svelte";

  export let runtime: OverlayRuntime;

  let themeName = "";

  function save() {
    saveCurrentTheme(themeName);

    cancel();
  }

  function cancel() {
    ProcessStack.kill(runtime.pid);
  }
</script>

<ThemePreview><Desktop /></ThemePreview>
<div class="header">
  <h2>Save Theme</h2>
  <p>What a nice theme! Enter a fitting name for it:</p>
</div>
<input type="text" bind:value={themeName} />
<div class="buttons">
  <button on:click={cancel}>Cancel</button>
  <button on:click={save} class="suggested" disabled={!themeName}>Save</button>
</div>
