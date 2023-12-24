<script lang="ts">
  import { Runtime } from "$apps/Settings/ts/runtime";
  import { StateHandler } from "$ts/states";
  import { ThemeCaptions } from "$ts/stores/themes/values";
  import { UserDataStore } from "$ts/stores/user";
  import ThemePreview from "../../ThemePreview.svelte";
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
  <ThemePreview />
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
          {ThemeCaptions[$UserDataStore.sh.desktop.theme] || "Invalid"}
        </p>
      </div>
      <div class="right">
        <button class="material-icons-round edit" on:click={changeStyle}
          >launch</button
        >
      </div>
    </div>
    <button class="save-theme" on:click={saveTheme}>Save Theme...</button>
  </div>
</div>
