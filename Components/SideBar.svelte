<script lang="ts">
  import { States } from "$types/state";
  import { ScopedAppData } from "$types/user";
  import { onMount } from "svelte";
  import { Runtime } from "../ts/runtime";
  import Page from "./SideBar/Page.svelte";

  export let appdata: ScopedAppData;
  export let runtime: Runtime;

  let current = "";
  let pages: States = new Map([]);

  onMount(() => {
    pages = runtime.state.store;

    runtime.state.current.subscribe((v) => (current = v.key));
  });
</script>

<div class="sidebar" class:collapsed={!appdata.collapsed}>
  {#if pages.size}
    {#each [...pages] as [id, page]}
      <Page {id} {page} selected={current == id} {runtime} />
    {/each}
  {/if}
</div>
