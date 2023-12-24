<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import Overview from "./Wallpaper/Overview.svelte";
  import WallpaperSelector from "./Wallpaper/WallpaperSelector.svelte";

  export let runtime: Runtime;
</script>

<Overview {runtime} />
<WallpaperSelector />
