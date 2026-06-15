<script lang="ts">
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { quartInOut } from "svelte/easing";
  interface Props {
    title: string;
    year: string;
    desc: string;
    image: string;
    url: string;
    transitionDelay: number;
  }

  const { title, year, desc, image, url, transitionDelay }: Props = $props();
  let ready = $state(false);
  onMount(() => {
    ready = true;
  });
</script>

{#if ready}
  <a
    role="button"
    class="tile-body"
    href={url}
    transition:fly={{
      delay: 5 * (transitionDelay * 2),
      duration: 1000,
      y: 200,
      opacity: 0.0,
      easing: quartInOut,
    }}
  >
    <div class="project-image-container">
      <span class="project-date">{year}</span>
      <span class="project-title">{title}</span>
      <div class="project-desc-wrapper">
        <span class="project-desc">{desc}</span>
      </div>
      <img class="project-image" src={image} alt="placeholder alt text" fetchpriority="high"/>
    </div>
  </a>
{/if}

<style scoped>
  .tile-body {
    position: relative;
    background-color: var(--bg-secondary);
    color: var(--text-primary);
    border-radius: var(--rounding-md);
    padding: var(--spacing-md);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    text-decoration: none;
    transform-style: preserve-3d;
    transition: all 2ms;
    border: var(--border-width) solid var(--bg-tertiary);
  }

  .tile-body:hover {
    outline: 2px solid var(--text-secondary);
  }


  .project-date {
    position: absolute;
    margin: var(--spacing-sm);
    padding: var(--spacing-sm);
    top: 0;
    left: 0;
    background-color: var(--blue);
  }

  .project-title {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: var(--spacing-sm);
    font-family: var(--font-accent);
    background-color: var(--blue);
    border-width: var(--spacing-sm) 0 0 var(--spacing-sm);
    border-style: solid;
    border-color: var(--bg-secondary);
    border-top-left-radius: var(--rounding-lg);
    color: var(--green);
    max-width: 66%;
    text-align: right;
  }

  .project-desc-wrapper {
    content-visibility: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    z-index: 10;
    transition: opacity 400ms;
    opacity: 0;
  }

  .tile-body:hover .project-desc-wrapper {
    background-color: oklch(from var(--bg-primary) l c h / calc(0.3));
    content-visibility: visible;
    opacity: 1;
  }

  .project-desc {
    margin: var(--spacing-sm);
    padding: var(--spacing-sm);
    color: var(--text-secondary);
    background-color: var(--bg-primary);
    border-radius: var(--rounding-sm);
    width: 100%;
    text-align: center;
  }

  .project-image-container {
    position: relative;
    padding: 0;
    margin: 0;
    aspect-ratio: 1/1;
  }

  .project-image {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--rounding-sm);
  }
</style>
