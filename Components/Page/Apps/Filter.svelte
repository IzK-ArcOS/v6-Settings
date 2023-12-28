<script lang="ts">
  import { AppsViewMode } from "$apps/Settings/ts/types";
  import { ReadableStore } from "$types/writable";
  import Search from "./Filter/Search.svelte";
  import View from "./Filter/View.svelte";

  export let query: ReadableStore<string>;
  export let view: AppsViewMode | string;
</script>

<div class="filter">
  <View bind:view />
  <div class="sep" />
  <Search bind:query />
</div>
