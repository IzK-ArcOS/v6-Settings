<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { State } from "$types/state";

  export let id: string;
  export let page: State;
  export let selected = false;
  export let runtime: Runtime;

  function switchTo() {
    runtime.state.navigate(id);
  }
</script>

<button class="page" class:selected on:click={switchTo}>
  <img src={page.image} alt={id} />
  <span class="name">{page.name}</span>
</button>
