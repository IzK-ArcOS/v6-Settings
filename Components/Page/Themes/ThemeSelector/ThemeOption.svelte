<script lang="ts">
  import { loadTheme } from "$ts/themes";
  import { getWallpaper } from "$ts/wallpaper";
  import { UserTheme } from "$types/theme";
  import { onMount } from "svelte";

  export let theme: UserTheme;

  let wallpaper = "";

  onMount(async () => {
    const data = await getWallpaper(theme.wallpaper);

    wallpaper = data.builtin ? data.thumb : data.url;
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
  style="--accent: #{theme.accent};"
  on:click={apply}
  title="{theme.name} by {theme.author} (version {theme.version})"
>
  <img src={wallpaper} alt={theme.name} />
  <div class="fake-window shell-colored" class:colored={theme.taskbarColored}>
    <div class="fake-button" />
  </div>
</button>
