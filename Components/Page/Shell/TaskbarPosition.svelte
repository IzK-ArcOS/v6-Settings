<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";

  export let disabled = false;

  const options = {
    vertical: "left",
    "": "bottom",
    "vertical-right": "right",
    top: "top",
  };
</script>

{#if $UserDataStore}
  <div class="taskbarpos">
    {#each Object.entries(options) as opt}
      <button
        class="pos {opt[1]} material-icons-round"
        on:click={() => ($UserDataStore.sh.taskbar.pos = opt[0])}
        class:selected={$UserDataStore.sh.taskbar.pos == opt[0]}
        {disabled}
      >
        vertical_align_bottom
      </button>
    {/each}
  </div>
{/if}

<style scoped>
  div.taskbarpos {
    display: flex;
    align-items: center;
    height: 30px;
    overflow: hidden;
    border-radius: 5px;
    border: var(--button-hover-bg) 1px solid;
  }

  div.taskbarpos button {
    width: 30px !important;
    height: 30px !important;
    padding: 0 !important;
    margin: 0 !important;
    border-radius: 0 !important;
    font-size: 16px;
  }

  div.taskbarpos button:disabled {
    opacity: 0.7;
  }

  div.taskbarpos button.selected {
    background-color: var(--accent-light) !important;
    color: var(--accent-dark);
  }

  div.taskbarpos button.left {
    transform: rotate(90deg);
  }
  div.taskbarpos button.right {
    transform: rotate(-90deg);
  }
  div.taskbarpos button.top {
    transform: rotate(180deg);
  }
</style>
