<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { UserDataStore } from "$ts/stores/user";
  import SettingsOption from "../SettingsOption.svelte";
  import TaskbarPosition from "./Shell/TaskbarPosition.svelte";

  export let runtime: Runtime;

  function userStyle() {
    runtime.showOverlay("UserStyleEditor");
  }
</script>

<!-- <SettingsOption title="Center taskbar buttons" context="Centers the taskbar app buttons">
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.taskbar.centered} />
</SettingsOption> -->
<SettingsOption title="Taskbar app labels" context="Display app names on the taskbar">
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.taskbar.labels} />
</SettingsOption>
<SettingsOption title="Taskbar position" context="Where do you want the taskbar?">
  <TaskbarPosition />
</SettingsOption>

<SettingsOption title="Accented start button" context="Match the Start logo with your accent color">
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.taskbar.accentedStart} />
</SettingsOption>
<hr />
<SettingsOption title="Don't group start" context="Disable the start menu app grouping">
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.start.noGroups} />
</SettingsOption>
<SettingsOption title="Dock shell" context="Dock the taskbar and action center">
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.taskbar.docked} />
</SettingsOption>
<SettingsOption title="Compact context menu" context="Make the context menu more compact">
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.compactContext} />
</SettingsOption>
<hr />
<SettingsOption title="User Styles" context="Add custom CSS to your desktop">
  <button on:click={userStyle}>Edit...</button>
</SettingsOption>
