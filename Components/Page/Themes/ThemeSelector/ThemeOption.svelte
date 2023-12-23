<script lang="ts">
  import { loadTheme } from "$ts/themes";
  import { getWallpaper } from "$ts/wallpaper";
  import { UserTheme } from "$types/theme";
  import { onMount } from "svelte";

  export let theme: UserTheme;

  let wallpaper = "";

  onMount(async () => {
    wallpaper = (await getWallpaper(theme.wallpaper)).url;
  });

  function apply() {
    loadTheme(theme);
  }
</script>

<button
  class="theme-option theme-{theme.theme}"
  class:sharp={theme.sharp}
  class:noani={!theme.anim}
  class:noglass={theme.noGlass}
  style="--accent: #{theme.accent}; --bg: url({wallpaper})"
  on:click={apply}
  title="{theme.name} by {theme.author} (version {theme.version})"
>
  <div class="fake-window shell-colored" class:colored={theme.taskbarColored}>
    <div class="fake-button" />
  </div>
</button>
