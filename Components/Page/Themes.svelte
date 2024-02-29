<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { StateHandler } from "$ts/states";
  import ThemeOverview from "./Themes/ThemeOverview.svelte";
  import ThemeSelector from "./Themes/ThemeSelector.svelte";

  export let runtime: Runtime;
  export let handler: StateHandler;
</script>

<ThemeOverview {runtime} {handler} />
<ThemeSelector />
