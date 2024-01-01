<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { appLibrary } from "$ts/stores/apps";
  import { ReadableStore } from "$types/writable";
  import Fuse from "fuse.js";
  import App from "./Grid/App.svelte";
  import { onMount } from "svelte";
  import { AppsViewMode } from "$apps/Settings/ts/types";
  import { isPopulatable } from "$ts/apps";

  export let runtime: Runtime;
  export let query: ReadableStore<string>;
  export let view: AppsViewMode;

  let filterResult: string[] = [];
  let filtering = false;

  function filter() {
    filterResult = [];

    if (!$query) {
      filtering = false;

      return;
    }

    filtering = true;

    const library = appLibrary.get();
    const items = [];

    for (const [id, app] of library) {
      items.push({ id, name: app.metadata.name, author: app.metadata.author });
    }

    const options = {
      includeScore: true,
      keys: ["id", "name", "author"],
      isCaseSensitive: false,
      threshold: 0.2,
    };

    const fuse = new Fuse(items, options);
    const result = fuse.search($query);

    for (let i = 0; i < result.length; i++) {
      filterResult.push(result[i].item.id);
    }
  }

  onMount(() => {
    query.subscribe(filter);
  });
</script>

<div class="apps-grid">
  {#each [...$appLibrary] as [id, app]}
    {#if !filtering || filterResult.includes(id)}
      <App {runtime} {id} {app} {view} />
    {/if}
  {/each}
</div>
