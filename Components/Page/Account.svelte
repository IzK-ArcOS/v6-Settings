<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import ChangeProfilePicture from "./Account/ChangeProfilePicture.svelte";
  import Credentials from "./Account/Credentials.svelte";
  import DeleteButton from "./Account/DeleteButton.svelte";
  import Profile from "./Account/Profile.svelte";

  export let runtime: Runtime;
  let editing = false;
</script>

{#if !editing}
  <Profile bind:editing />
  <Credentials {runtime} />
  <DeleteButton {runtime} />
{:else}
  <ChangeProfilePicture {runtime} bind:editing />
{/if}
