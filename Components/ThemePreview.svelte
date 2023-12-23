<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import { getWallpaper } from "$ts/wallpaper";

  export let noDecorations = false;

  let wallpaper = "";

  UserDataStore.subscribe(async (v) => {
    wallpaper = (await getWallpaper(v.sh.desktop.wallpaper)).url;
  });
</script>

<div
  class="theme-preview theme-{$UserDataStore.sh.desktop.theme}"
  class:sharp={$UserDataStore.sh.desktop.sharp}
  class:noani={!$UserDataStore.sh.anim}
  class:noglass={$UserDataStore.sh.noGlass}
  style="--bg: url({wallpaper});"
>
  {#if !noDecorations}
    <div class="fake-window">
      <div class="fake-header" />
      <div class="fake-text" />
      <div class="fake-button" />
    </div>
    <div class="fake-taskbar" />
  {/if}
</div>
