<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { DesktopIcon } from "$ts/images/general";
  import { createErrorDialog } from "$ts/process/error";
  import { UserDataStore } from "$ts/stores/user";
  import { getWallpaper } from "$ts/wallpaper";
  import { Wallpaper } from "$types/wallpaper";
  import ThemePreview from "../../ThemePreview.svelte";
  import MoreInfo from "./MoreInfo.svelte";

  export let runtime: Runtime;
  let wallpaper: Wallpaper;

  UserDataStore.subscribe(async (v) => {
    wallpaper = await getWallpaper(v.sh.desktop.wallpaper);
  });

  function moreInfo() {
    createErrorDialog(
      {
        component: MoreInfo,
        title: "More Information",
        image: DesktopIcon,
        buttons: [{ caption: "I see", action() {}, suggested: true }],
        shrunk: true,
      },
      runtime.pid,
      true
    );
  }
</script>

{#if wallpaper}
  <div class="theme-overview">
    <ThemePreview />
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
      <button on:click={moreInfo}>More info...</button>
    </div>
  </div>
{/if}
