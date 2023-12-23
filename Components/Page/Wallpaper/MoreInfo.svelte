<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import { getWallpaper } from "$ts/wallpaper";
  import { Wallpaper } from "$types/wallpaper";

  let wallpaper: Wallpaper;

  UserDataStore.subscribe(async (v) => {
    wallpaper = await getWallpaper(v.sh.desktop.wallpaper);
  });
</script>

{#if wallpaper}
  <p>
    This wallpaper is called <b>{wallpaper.name}</b> and was created by
    <b>{wallpaper.author}</b>. {wallpaper.source
      ? `It was created in ${wallpaper.source}.`
      : ""} The wallpaper is known to ArcOS as
    <code>{$UserDataStore.sh.desktop.wallpaper}</code>.
  </p>
{/if}
