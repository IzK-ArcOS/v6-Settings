<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import ApiReveal from "$lib/Components/ApiReveal.svelte";
  import ProfilePicture from "$lib/Components/ProfilePicture.svelte";
  import { getProfilePicture } from "$ts/stores/pfp";
  import { UserDataStore, UserName } from "$ts/stores/user";
  import { State } from "$types/state";
  import { onMount } from "svelte";

  export let runtime: Runtime;
  export let current: string;

  const PAGE_ID = "account";

  let page: State;
  let pfp = "";

  UserDataStore.subscribe((v) => {
    pfp = getProfilePicture(v.acc.profilePicture);
  });

  onMount(() => {
    if (!runtime.state.store.has(PAGE_ID)) return;

    page = runtime.state.store.get(PAGE_ID);
  });

  function go() {
    runtime.state.navigate(PAGE_ID);
  }
</script>

{#if page}
  <button
    class="page account"
    class:selected={current == PAGE_ID}
    on:click={go}
  >
    <ProfilePicture src={pfp} height={30} />
    <span class="name">
      <p class="username">{$UserName}</p>
      <p class="server"><ApiReveal /></p>
    </span>
  </button>
{/if}
