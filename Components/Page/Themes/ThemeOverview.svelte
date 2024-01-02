<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { StateHandler } from "$ts/states";
  import { UserDataStore } from "$ts/stores/user";
  import ThemePreview from "../../ThemePreview.svelte";
  import Desktop from "../../ThemePreview/Desktop.svelte";
  import AccentColor from "./ThemeOverview/AccentColor.svelte";

  export let handler: StateHandler;
  export let runtime: Runtime;

  function saveTheme() {
    runtime.showOverlay("SaveTheme");
  }

  function changeStyle() {
    handler.navigate("visuals");
  }
</script>

<div class="theme-overview">
  <ThemePreview><Desktop /></ThemePreview>
  <div class="common">
    <div class="common-option accent">
      <div class="text">
        <p class="name">Accent</p>
        <p class="value">#{$UserDataStore.sh.desktop.accent}</p>
      </div>
      <AccentColor />
    </div>
    <div class="common-option style">
      <div class="text">
        <p class="name">Visual Style</p>
        <p class="value">
          <select class="flat" bind:value={$UserDataStore.sh.desktop.theme}>
            <option value="dark">Darkmode</option>
            <option value="light">Lightmode</option>
            <option value="amoled">Amoled</option>
            <option value="amber">Amber Monochrome</option>
            <option value="scifi">Science Fiction</option>
            <option value="hc">High contrast</option>
          </select>
        </p>
      </div>
    </div>
    <button class="save-theme" on:click={saveTheme}>Save Theme...</button>
  </div>
</div>
