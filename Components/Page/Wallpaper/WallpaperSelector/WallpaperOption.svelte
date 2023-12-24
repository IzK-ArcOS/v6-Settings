<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";
  import { Wallpaper } from "$types/wallpaper";

  export let id: string;
  export let wallpaper: Wallpaper;

  function select() {
    $UserDataStore.sh.desktop.wallpaper = id;
  }
</script>

<button
  class="theme-option wallpaper-{id}"
  title="{wallpaper.name} by {wallpaper.author}"
  class:selected={$UserDataStore.sh.desktop.wallpaper === id}
  on:click={select}
>
  <img src={wallpaper.thumb} alt={id} />
</button>
