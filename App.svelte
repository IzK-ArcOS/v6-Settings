<script lang="ts">
  import StateRenderer from "$lib/StateRenderer.svelte";
  import { App } from "$types/app";
  import "./css/main.css";
  import { Runtime } from "./ts/runtime";

  export let app: App;
  export let runtime: Runtime;
</script>

<div class="sidebar">sidebar</div>
<StateRenderer handler={runtime.state} />
