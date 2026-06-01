<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { quartInOut } from "svelte/easing";
  const emailReg: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
</script>

<svelte:head>
  <title>Contact - Ethan McIntyre</title>
</svelte:head>

<article class="contact-main">
  <p>Connect with me on LinkedIn!</p>
</article>

<style>
  .contact-main {
    width: 100%;
    background-color: var(--bg-primary);
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>
