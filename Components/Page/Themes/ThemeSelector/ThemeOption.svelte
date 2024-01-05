<script lang="ts">
  import { loadTheme } from "$ts/themes";
  import { getWallpaper } from "$ts/wallpaper";
  import { UserTheme } from "$types/theme";
  import { onMount } from "svelte";

  export let theme: UserTheme;
  export let id: string = "";
  export let user = false;

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
  data-contextmenu={user ? "user-theme" : "system-theme"}
  data-id={id}
  data-theme={JSON.stringify(theme)}
  data-name={theme.name}
>
  <img src={wallpaper} alt={theme.name} />
  <div class="fake-window shell-colored" class:colored={theme.taskbarColored}>
    <div class="fake-button" />
  </div>
</button>
