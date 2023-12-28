<script lang="ts">
  import { ReadableStore } from "$types/writable";

  export let query: ReadableStore<string>;
</script>

<div class="search-field">
  <span class="material-icons-round icon">search</span>
  <input type="text" bind:value={$query} placeholder="Search" />
</div>
