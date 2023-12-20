<script lang="ts">
  import StateRenderer from "$lib/StateRenderer.svelte";
  import Titlebar from "$state/Desktop/Components/ProcessRenderer/Window/Titlebar.svelte";
  import { onMount } from "svelte";
  import SideBar from "./Components/SideBar.svelte";
  import "./css/main.css";
  import { Runtime } from "./ts/runtime";

  export let pid: number;
  export let runtime: Runtime;

  let stateName = "";

  onMount(() => {
    runtime.state.current.subscribe((v) => (stateName = v.name));
  });
</script>

{#if runtime}
  <SideBar {runtime} />
  <div class="content-wrapper">
    <Titlebar app={runtime.appMutator} {pid} showIcon={false} showTitle={false}>
      <h1 class="page-title">{stateName}</h1>
    </Titlebar>
    <StateRenderer handler={runtime.state} {runtime} />
  </div>
{/if}
