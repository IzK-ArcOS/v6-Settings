<script lang="ts">
  import ProfilePicture from "$lib/Components/ProfilePicture.svelte";

  export let editing: boolean;

  function toggle() {
    editing = !editing;
  }
</script>

<div class="pfp-wrapper" data-contextmenu="account-pfp">
  <ProfilePicture height={128} />
  <button class="edit-button material-icons-round" on:click={toggle}>
    {editing ? "close" : "edit"}
  </button>
</div>
