<script>
  import { Wallpapers } from "$ts/stores/wallpaper";
  import ImageOption from "./ImageSelector/ImageOption.svelte";
</script>

<div class="theme-selector">
  {#each Object.entries(Wallpapers) as [id, wallpaper]}
    <ImageOption {id} {wallpaper} />
  {/each}
</div>
