<script lang="ts">
  import { States } from "$types/state";
  import { ScopedAppData } from "$types/user";
  import { onMount } from "svelte";
  import { Runtime } from "../ts/runtime";
  import Page from "./SideBar/Page.svelte";
  import AccountButton from "./SideBar/AccountButton.svelte";

  export let runtime: Runtime;

  let current = "";
  let pages: States = new Map([]);

  onMount(() => {
    pages = runtime.state.store;

    runtime.state.current.subscribe((v) => (current = v.key));
  });
</script>

<div class="sidebar">
  <AccountButton {runtime} {current} />
  <hr />
  {#if pages.size}
    {#each [...pages] as [id, page]}
      {#if !page.attribs.hidden}
        <Page {id} {page} selected={current == id} {runtime} />
      {/if}
    {/each}
  {/if}
</div>
