<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { ProfilePictures } from "$ts/stores/pfp";
  import PictureOption from "./ChangeProfilePicture/PictureOption.svelte";

  export let editing: boolean;
  export let runtime: Runtime;

  function done() {
    editing = false;
  }

  function custom() {
    editing = false;
    runtime.showOverlay("CustomProfilePicture");
  }
</script>

<div class="profile-pictures">
  {#each Object.values(ProfilePictures) as pfp, i}
    <PictureOption {pfp} {i} />
  {/each}
</div>
<div class="actions">
  <button on:click={custom}>Custom...</button>
  <button class="suggested" on:click={done}>Done</button>
</div>
