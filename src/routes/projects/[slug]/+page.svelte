<script lang="ts">
  import type { PageData } from "./$types";
  import { PortableText } from "@portabletext/svelte";
  import { ProjectState } from "./ProjectState.svelte";
  import Chevron from "$lib/components/icons/Chevron.svelte";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { quartInOut } from "svelte/easing";
  import Close from "$lib/components/icons/Close.svelte";
  import { urlFor } from "$lib/sanity";
  interface Props {
    data: PageData;
  }

  const { data }: Props = $props();

  const projectState = new ProjectState();
  $inspect(projectState.expandedImage);
  let ready = $state(false);

  let selectedImage: SelectedImage = $state({
    isSelected: false,
    image: null,
  });

  /* -- animation values -- */
  const animDuration = 1500;
  const moreBtnDuration = 3000;
  const gridAnimDuration = 2000;

  onMount(() => {
    ready = true;
  });

  const scrollToImageGrid = () => {
    const imageGrid = document.getElementById("image-grid");
    if (!imageGrid) return;
    imageGrid.scrollIntoView({ behavior: "smooth" });
  };
</script>

<svelte:head>
  <title>{data.project.title} - Projects - Ethan McIntyre</title>
</svelte:head>

<article class="project-page-main">
  <dialog
    id="image-dialog"
    bind:this={projectState.projectModal}
    onclose={projectState.closeImage}
    closedby="any"
  >
    <button
      class="close-btn"
      aria-label="Close expanded image"
      onclick={projectState.closeImage}><Close /></button
    >
    <img src={projectState.expandedImage} alt="" fetchpriority="high" />
  </dialog>
  {#if ready}
    <section class="project-intro-section">
      <div
        class="project-page-desc"
        transition:fly={{
          delay: 0,
          duration: animDuration,
          x: "-25vw",
          opacity: 0.0,
          easing: quartInOut,
        }}
      >
        <h2 class="project-title">
          {data.project.title}
        </h2>
        <div class="project-page-desc-text">
          <PortableText value={data.project.content} components={{}} />
        </div>
        <a href="/projects" role="button" class="back-button"
          >Back to projects</a
        >
      </div>
      <div
        class="project-cover-wrapper"
        transition:fly={{
          delay: animDuration / 4,
          duration: animDuration,
          x: "25vw",
          opacity: 0.0,
          easing: quartInOut,
        }}
      >
        <!-- svelte-ignore a11y_missing_attribute -->
        <img
          class="project-cover-img"
          src={urlFor(data.project.cover).format("webp").quality(100).url()}
        />
      </div>
    </section>
    {#if data.project.carousel.length > 0}
      <button
        class="more-btn"
        onclick={scrollToImageGrid}
        transition:fly={{
          delay: 0,
          duration: moreBtnDuration,
          y: "25vh",
          opacity: 0.0,
          easing: quartInOut,
        }}
        ><span>More images</span>
        <div><Chevron /></div></button
      >
    {/if}
    <section id="image-grid" class="project-image-grid">
      {#each data.project.carousel as image}
        <button
          class="project-image-tile"
          aria-label="expand image"
          onclick={() => (projectState.expandedImage = image)}
        >
          <img src={urlFor(image).format("webp").quality(100).url()} alt="temp placeholder text" />
        </button>
      {/each}
    </section>
  {/if}
</article>

<style scoped>
  :root {
    --landing-height: 70dvh;
    --grid-height: 50dvh;
  }

  #image-dialog {
    background-color: var(--bg-secondary);
    border-radius: var(--rounding-md);
    border-width: var(--border-width);
    border-color: var(--bg-tertiary);
    padding: var(--spacing-md);
    gap: var(--spacing-sm);
    transition: all 2s;
  }

  #image-dialog[open] {
    animation: slide-in 600ms ease forwards;
  }

  #image-dialog > img {
    max-height: 85vh;
    max-width: 85vw;
    border-radius: var(--rounding-md);
  }

  #image-dialog::backdrop {
    background-color: var(--modal-overlay);
  }

  .close-btn {
    background-color: var(--red);
    border-radius: var(--rounding-md);
    border: var(--border-width) solid var(--text-secondary);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: var(--spacing-sm);
    right: var(--spacing-sm);
    height: 3em;
    width: 3em;
    cursor: pointer;
  }

  .close-btn:hover {
    background-color: oklch(from var(--red) l c h);
  }

  .more-btn {
    display: flex;
    flex-direction: column;
    font-size: large;
    font-weight: bold;
    padding: var(--spacing-sm);
    border-radius: var(--rounding-lg);
    background-color: var(--bg-primary);
    color: var(--text-primary);
    border: var(--border-width) solid var(--text-secondary);
    transition: all 300ms ease-in-out;
  }

  .more-btn:hover {
    background-color: var(--bg-secondary);
    border-color: var(--text-primary);
  }

  .more-btn > span {
    margin-top: var(--spacing-sm);
  }

  .project-image-grid {
    display: grid;
    gap: var(--spacing-md);
    grid-template-columns: repeat(3, 1fr);
  }

  .project-image-tile {
    cursor: pointer;
    border-radius: var(--rounding-md);
    border: var(--border-width) solid var(--bg-tertiary);
    background-color: var(--bg-tertiary);
    height: var(--grid-height);
    padding: 0;
    transition: all 1s;
  }

  .project-image-tile:hover {
    border-color: var(--text-secondary);
  }

  .project-image-tile:nth-child(2n) {
  }

  .project-image-tile > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: var(--rounding-md);
    margin: 0;
  }

  .project-page-main {
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--bg-primary);
    padding: var(--spacing-md);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: var(--spacing-md);
  }

  .project-intro-section {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-md);
    height: 100%;
    max-height: var(--landing-height) + (var(--border-width) * 2);
  }

  .project-page-desc {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    border-radius: var(--rounding-md);
    border: var(--border-width) solid var(--bg-tertiary);
    padding: var(--spacing-md);
    background-color: var(--bg-secondary);
    max-height: var(--landing-height);
  }

  .project-page-desc-text {
    overflow-y: auto;
    flex-grow: 1;
  }

  .project-title {
    background-color: var(--blue);
    padding: var(--spacing-sm);
    border-radius: var(--rounding-sm);
    color: var(--green);
  }

  .back-button {
    cursor: pointer;
    border-radius: var(--rounding-lg);
    background-color: var(--bg-inverse);
    color: var(--text-inverse);
    outline: none;
    padding: var(--spacing-sm);
    display: flex;
    justify-items: center;
    gap: var(--spacing-xs);
    margin-top: auto;
    font-size: medium;
    text-transform: lowercase;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    transition: all 300ms ease-in-out;
  }

  .project-cover-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: var(--rounding-md);
  }

  .project-cover-wrapper {
    min-width: 60%;
    border-radius: var(--rounding-md);
    border: var(--border-width) solid var(--bg-tertiary);
    background-color: var(--bg-tertiary);
    height: var(--landing-height);
  }
</style>
