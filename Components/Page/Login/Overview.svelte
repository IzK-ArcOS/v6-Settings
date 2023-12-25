<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { UserDataStore } from "$ts/stores/user";
  import { getWallpaper } from "$ts/wallpaper";
  import { Wallpaper } from "$types/wallpaper";
  import ThemePreview from "../../ThemePreview.svelte";

  export let runtime: Runtime;
  let wallpaper: Wallpaper;

  UserDataStore.subscribe(async (v) => {
    wallpaper = await getWallpaper(v.acc.loginBackground);
  });

  function custom() {
    runtime.showOverlay("CustomLoginBackground");
  }
</script>

{#if wallpaper}
  <div class="theme-overview">
    <ThemePreview noDecorations />
    <div class="common">
      <div class="common-option">
        <div class="text">
          <p class="name">Name</p>
          <p class="value">{wallpaper.name}</p>
        </div>
      </div>
      <div class="common-option">
        <div class="text">
          <p class="name">Author</p>
          <p class="value">{wallpaper.author}</p>
        </div>
      </div>
      <div class="buttons">
        <button
          class="button material-icons-round"
          title="Login Background from URL"
          on:click={custom}
        >
          travel_explore
        </button>
      </div>
    </div>
  </div>
{/if}
