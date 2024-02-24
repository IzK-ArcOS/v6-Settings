<script lang="ts">
  export let title: string;
  export let context: string;
  export let asterisk = false;
  export let className = "";
  export let disabled = false;
</script>

<div class="settings-option {className}" class:disabled>
  <div>
    <h3 class="header" class:asterisk>{title}</h3>
    <p class="context">{@html context}</p>
  </div>
  <div class="option-input">
    <slot />
  </div>
</div>

<style>
  .asterisk {
    display: flex;
    align-items: top;
    gap: 5px;
  }

  .asterisk::after {
    content: "*";
    color: var(--clr-red-fg);
    font-family: "Source Code Pro", monospace;
    font-weight: bold;
    font-size: 12px;
  }
</style>
