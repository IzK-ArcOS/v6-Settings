<script lang="ts">
  import { Wallpapers } from "$ts/stores/wallpaper";
  import WallpaperOption from "./WallpaperSelector/WallpaperOption.svelte";
</script>

<div class="theme-selector">
  {#each Object.entries(Wallpapers) as [id, wallpaper]}
    <WallpaperOption {id} {wallpaper} />
  {/each}
</div>
