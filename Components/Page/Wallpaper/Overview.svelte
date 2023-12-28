<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { toBase64 } from "$ts/base64";
  import { createDirectory } from "$ts/server/fs/dir";
  import { directSingleUpload } from "$ts/server/fs/upload";
  import { UserDataStore } from "$ts/stores/user";
  import { getWallpaper } from "$ts/wallpaper";
  import { Wallpaper } from "$types/wallpaper";
  import ThemePreview from "../../ThemePreview.svelte";
  import Desktop from "../../ThemePreview/Desktop.svelte";

  export let runtime: Runtime;
  let wallpaper: Wallpaper;

  UserDataStore.subscribe(async (v) => {
    wallpaper = await getWallpaper(v.sh.desktop.wallpaper);
  });

  async function upload() {
    await createDirectory("./Wallpapers");

    const path = await directSingleUpload(
      "./Wallpapers",
      "image/png, image/jpeg, image/gif, image/svg+xml"
    );

    $UserDataStore.sh.desktop.wallpaper = `@local:${toBase64(path)}`;
  }

  function custom() {
    runtime.showOverlay("CustomWallpaper");
  }
</script>

{#if wallpaper}
  <div class="theme-overview">
    <ThemePreview><Desktop /></ThemePreview>
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
          title="Upload a wallpaper"
          on:click={upload}
        >
          upload
        </button>
        <button
          class="button material-icons-round"
          title="Wallpaper from URL"
          on:click={custom}
        >
          travel_explore
        </button>
      </div>
    </div>
  </div>
{/if}
