<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import { getWallpaper } from "$ts/wallpaper";

  export let noDecorations = false;
  export let isLogin = false;

  let wallpaper = "";

  UserDataStore.subscribe(async (v) => {
    wallpaper = (
      await getWallpaper(
        isLogin ? v.acc.loginBackground : v.sh.desktop.wallpaper,
        isLogin ? "img15" : "img04"
      )
    ).url;
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
    <slot />
  {/if}
</div>
