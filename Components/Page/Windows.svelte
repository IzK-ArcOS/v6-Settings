<script>
  import { UserDataStore } from "$ts/stores/user";
  import SettingsOption from "../SettingsOption.svelte";
</script>

z
<SettingsOption title="Large titlebar" context="Make the titlebars larger">
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.window.bigtb} />
</SettingsOption>

<SettingsOption title="Left titlebar buttons" context="Swap the titlebar and window controls">
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.window.lefttb} />
</SettingsOption>

<SettingsOption
  title="Center window title"
  context="Put the window title in the center of the titlebar"
>
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.window.centertb} />
</SettingsOption>
<!-- 
<SettingsOption title="Titlebar buttons" context="Change the titlebar buttons">
  <button disabled>Change...</button>
</SettingsOption>
 -->
