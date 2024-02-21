<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import SettingsOption from "../SettingsOption.svelte";
</script>

<SettingsOption title="Animations" context="Display animations on windows and elements">
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.anim} />
</SettingsOption>

<SettingsOption title="No glass" context="Disable transparency and glass effects">
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.noGlass} />
</SettingsOption>

<SettingsOption title="Sharp corners" context="Remove all rounded corners">
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.desktop.sharp} />
</SettingsOption>

<SettingsOption title="No custom cursors" context="Disable the ArcOS custom cursors">
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.desktop.noCustomCursor} />
</SettingsOption>
<hr />
<SettingsOption
  title="Broad accent colors"
  context="Display accent colors on windows and the shell"
>
  <input type="checkbox" class="switch" bind:checked={$UserDataStore.sh.taskbar.colored} />
</SettingsOption>
