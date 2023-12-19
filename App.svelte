<script lang="ts">
  import StateRenderer from "$lib/StateRenderer.svelte";
  import Titlebar from "$state/Desktop/Components/ProcessRenderer/Window/Titlebar.svelte";
  import { App } from "$types/app";
  import { ScopedAppData } from "$types/user";
  import MenuToggle from "./Components/MenuToggle.svelte";
  import SideBar from "./Components/SideBar.svelte";
  import "./css/main.css";
  import { Runtime } from "./ts/runtime";

  export let pid: number;
  export let app: App;
  export let runtime: Runtime;
  export let appdata: ScopedAppData;
</script>

{#if runtime}
  <SideBar {runtime} {appdata} />
  <div class="content-wrapper" class:collapsed={!appdata.collapsed}>
    <Titlebar app={runtime.appMutator} {pid} showIcon={false}>
      <MenuToggle {app} {appdata} />
    </Titlebar>
    <StateRenderer handler={runtime.state} {runtime} />
  </div>
{/if}
