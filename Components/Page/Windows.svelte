<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import { TitlebarButtons } from "$ts/stores/window";
  import SettingsOption from "../SettingsOption.svelte";
</script>

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

<SettingsOption title="Titlebar buttons" context="What titlebar buttons do you want?">
  <select bind:value={$UserDataStore.sh.window.buttons}>
    {#each Object.entries(TitlebarButtons) as [id, data]}
      <option value={id}>{data.author} - {data.caption}</option>
    {/each}
  </select>
</SettingsOption>
