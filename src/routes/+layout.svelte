<script lang="ts">
  import "../app.css";
  import { page } from "$app/state";
  import { fade, slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  // @ts-ignore
  import MenuIcon from "virtual:icons/mdi/menu"; // @ts-ignore
  import CloseIcon from "virtual:icons/mdi/close";
  const { data, children } = $props();
  let mobileMenuOpen: boolean = $state(false);

  function ToggleMobileMenu(openVal: boolean) {
    mobileMenuOpen = openVal;
  }
</script>

<nav class="nav-menu">
  <a href="/" class="accent-text nav-name-type">
    <span>Ethan McIntyre</span>
    {#if page.route.id !== "/"}
      &mdash; {page.route.id}
    {/if}
  </a>
  <a href="/" class={[ page.route.id && 'selected-nav-item' ]}>Home</a>
  <a href="projects" class={[ page.route.id && 'selected-nav-item' ]}>Projects</a>
  <a href="contact" class={[ page.route.id && 'selected-nav-item' ]}>Contact</a>
</nav>

{#key data.pathname}
  <main
    class="page-content"
    in:fade={{ duration: 300, delay: 500 }}
    out:fade={{ duration: 300 }}
  >
    {@render children?.()}
  </main>
{/key}

<style>
  :global(body, html) {
    height: 100dvh;
    max-height: 100dvh;
    margin: 0;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .page-content {
    flex-grow: 1;
    margin: 0;
  }

  .selected-nav-item {
    text-decoration: solid !important;
  }

  .nav-menu {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    justify-content: flex-end;
    top: 0;
    left: 0;
    padding: var(--spacing-sm);
    font-size: var(--text-md);
    gap: var(--spacing-sm);
    background-color: var(--bg-inverse);
    transition: width 2s;
    border-bottom: 2px solid var(--blue);
  }

  .nav-menu > a {
    color: var(--text-inverse);
    padding: var(--spacing-xs);
    text-decoration: none;
  }

  .nav-menu > a:hover {
    background-color: oklch(from var(--bg-inverse) calc(l - 0.1) c h);
  }

  .nav-menu > a:not(.nav-name-type) {
    padding: var(--spacing-xs);
    border-radius: var(--rounding-xs);
    transition: all;
    transition-duration: 100ms;
    text-transform: lowercase;
  }

  .nav-name-type {
    margin-right: auto;
  }
</style>
