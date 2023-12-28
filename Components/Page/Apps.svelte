<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { AppsViewMode } from "$apps/Settings/ts/types";
  import { Store } from "$ts/writable";
  import Bottom from "./Apps/Bottom.svelte";
  import Filter from "./Apps/Filter.svelte";
  import Grid from "./Apps/Grid.svelte";

  export let runtime: Runtime;

  let query = Store<string>("");
  let view: AppsViewMode = "all";
</script>

<Filter {query} bind:view />
<Grid {runtime} {query} {view} />
<Bottom />
