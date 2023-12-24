<script lang="ts">
  import { UserDataStore } from "$ts/stores/user";

  let hex = "70D6FF";
  let picker: HTMLInputElement;

  function openPicker() {
    picker.click();
  }

  UserDataStore.subscribe((v) => {
    if (v.sh.desktop.accent !== hex) hex = v.sh.desktop.accent;
  });

  function pickerInput() {
    hex = picker.value.replace("#", "").toUpperCase();
    $UserDataStore.sh.desktop.accent = hex;
  }
</script>

<div class="right">
  <button
    class="accent-circle"
    on:click={openPicker}
    style="background-color:#{hex};"
  />
  <input
    type="color"
    bind:this={picker}
    class="picker no-display"
    on:input={pickerInput}
    value="#{hex}"
  />
</div>
