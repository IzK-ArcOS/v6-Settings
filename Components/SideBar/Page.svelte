<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { SafeMode } from "$state/Desktop/ts/store";
  import { State } from "$types/state";

  export let id: string;
  export let page: State;
  export let selected = false;
  export let runtime: Runtime;

  function switchTo() {
    runtime.state.navigate(id);
  }
</script>

{#if !(page.className == "safemode-hidden" && $SafeMode)}
  <button
    class="page"
    class:selected
    on:click={switchTo}
    data-contextmenu="sidebar-page"
    data-id={id}
  >
    <img src={page.image} alt={id} />
    <span class="name">{page.name}</span>
  </button>
  {#if page.attribs.separator}
    <hr />
  {/if}
{/if}
