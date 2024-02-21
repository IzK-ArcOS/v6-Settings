<script lang="ts">
  import { AppsViewMode } from "$apps/Settings/ts/types";

  export let view: AppsViewMode | string;

  const MODES: Record<AppsViewMode, string> = {
    all: "All",
    user: "User",
    system: "Components",
  };
</script>

<div class="view-modes">
  {#each Object.entries(MODES) as [mode, caption]}
    <button class="mode" class:selected={view == mode} on:click={() => (view = mode)}>
      {caption}
    </button>
  {/each}
</div>
