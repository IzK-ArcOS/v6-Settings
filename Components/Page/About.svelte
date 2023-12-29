<script lang="ts">
  import { ArcOSVersion } from "$ts/env";
  import { GlowingLogo } from "$ts/images/branding";
  import { ARCOS_BUILD, ARCOS_MODE } from "$ts/metadata";
</script>

<img src={GlowingLogo} alt="ArcOS" class="logo" />
<h1>ArcOS <span class="colored">v6</span></h1>
<p>
  Thank you for using ArcOS! We're constantly working on improving it to give
  you the best experience possible. Curious who work on ArcOS? Go ahead and
  visit our Frontend GitHub page, we list our contributors there.
</p>
<p class="version">
  v{ArcOSVersion}-{ARCOS_MODE}
  {ARCOS_BUILD}
</p>
