<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { AppsViewMode } from "$apps/Settings/ts/types";
  import { appLibrary } from "$ts/stores/apps";
  import { UserDataStore } from "$ts/stores/user";
  import { ReadableStore } from "$types/writable";
  import Fuse from "fuse.js";
  import { onMount } from "svelte";
  import App from "./Grid/App.svelte";

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
    const results = fuse.search($query);

    for (const result of results) {
      filterResult.push(result.item.id);
    }
  }

  onMount(() => {
    query.subscribe(filter);
  });
</script>

{#if $UserDataStore}
  <div
    class="apps-grid"
    data-contextmenu="apps-grid"
    class:list={$UserDataStore.appdata["SettingsApp"] && $UserDataStore.appdata["SettingsApp"].list}
  >
    {#each [...$appLibrary] as [id, app]}
      {#if !filtering || filterResult.includes(id)}
        <App {runtime} {id} {app} {view} />
      {/if}
    {/each}
  </div>
{/if}
