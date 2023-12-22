<script lang="ts">
  import ProfilePicture from "$lib/Components/ProfilePicture.svelte";
  import { UserDataStore } from "$ts/stores/user";

  export let pfp: string;
  export let i: number;
  export let editing: boolean;

  function apply() {
    $UserDataStore.acc.profilePicture = i + 1;

    /* editing = false; */
  }
</script>

<button
  class="picture-option"
  on:click={apply}
  class:selected={$UserDataStore.acc.profilePicture == i + 1}
>
  <ProfilePicture height={40} src={pfp} />
</button>
