<script lang="ts">
  export let img: string;
  export let cancel: () => any;
  export let confirm: () => any;
  export let disabled = false;
</script>

<div class="value-changer">
  <div class="top">
    <div class="image"><img src={img} alt="" /></div>
    <div class="changer-content">
      <slot />
    </div>
  </div>
  <div class="buttons">
    <button class="cancel" on:click={cancel}>Cancel</button>
    <button class="confirm suggested" on:click={confirm} {disabled}>
      Confirm
    </button>
  </div>
</div>
