<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import { getWallpaper } from "$ts/wallpaper";

  export let noDecorations = false;
  export let isLogin = false;

  let loginBg = "";

  UserDataStore.subscribe(async (v) => {
    loginBg = (await getWallpaper(v.acc.loginBackground, "img15")).url;
  });
</script>

<div
  class="theme-preview theme-{$UserDataStore.sh.desktop.theme}"
  class:sharp={$UserDataStore.sh.desktop.sharp}
  class:noani={!$UserDataStore.sh.anim}
  class:noglass={$UserDataStore.sh.noGlass}
  style="--bg: {isLogin ? `url(${loginBg})` : 'var(--wallpaper)'};"
>
  {#if !noDecorations}
    <slot />
  {/if}
</div>
