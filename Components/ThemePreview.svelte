<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import { getWallpaper } from "$ts/wallpaper";

  export let noDecorations = false;
  export let isLogin = false;

  let bg = "";

  UserDataStore.subscribe(async (v) => {
    bg = (await getWallpaper(isLogin ? v.acc.loginBackground : v.sh.desktop.wallpaper, "img15"))
      .thumb;
  });
</script>

<div
  class="theme-preview theme-{$UserDataStore.sh.desktop.theme}"
  class:sharp={$UserDataStore.sh.desktop.sharp}
  class:noani={!$UserDataStore.sh.anim}
  class:noglass={$UserDataStore.sh.noGlass}
  style="--bg: url({bg});"
>
  {#if !noDecorations}
    <slot />
  {/if}
</div>
