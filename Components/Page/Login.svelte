<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import ImageSelector from "./Login/ImageSelector.svelte";
  import Overview from "./Login/Overview.svelte";

  export let runtime: Runtime;
</script>

<Overview {runtime} />
<ImageSelector />
