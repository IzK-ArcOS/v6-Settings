<script lang="ts">
  import StateRenderer from "$lib/StateRenderer.svelte";
  import Titlebar from "$state/Desktop/Components/ProcessRenderer/Window/Titlebar.svelte";
  import { onMount } from "svelte";
  import SideBar from "./Components/SideBar.svelte";
  import "./css/main.css";
  import { Runtime } from "./ts/runtime";
  import { State } from "$types/state";

  export let pid: number;
  export let runtime: Runtime;

  let state: State;

  onMount(() => {
    runtime.state.current.subscribe((v) => (state = v));
  });
</script>

{#if runtime && state}
  <SideBar {runtime} />
  <div class="content-wrapper settings-page-{state.key}">
    <Titlebar app={runtime.appMutator} {pid} showIcon={false} showTitle={false}>
      <h1 class="page-title">{state.name}</h1>
    </Titlebar>
    <StateRenderer handler={runtime.state} {runtime} />
  </div>
{/if}
