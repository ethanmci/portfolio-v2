<script lang="ts">
import EthanImg from "$lib/assets/newphoto.jpg"; // @ts-ignore (virtual: flags TS checker incorrectly)
import GitHubIcon from "virtual:icons/mdi/github-box"; // @ts-ignore
import LinkedinIcon from "virtual:icons/mdi/linkedin"; // @ts-ignore
import ForwardArrow from "virtual:icons/ic/baseline-arrow-forward";
import { PortableText } from "@portabletext/svelte";
import type { PageData } from "./$types";
import { onMount } from "svelte";
import { fly } from "svelte/transition";
import { backOut, quartInOut, quartOut } from "svelte/easing";
import { fade, slide } from "svelte/transition";
import IconButton from "$lib/components/IconButton.svelte";


interface Props {
  data: PageData;
}

const { data }: Props = $props();

let ready: boolean = $state(false);
onMount(() => {
  ready = true;
});
</script>

<svelte:head>
	<title>Home - Ethan McIntyre</title>
</svelte:head>

<div class="landing-bg">
  <img class="landing-img" src={EthanImg} alt="Ethan McIntyre sitting on a rock"/>
  <section class="landing-content" in:fade>
    <h1 class="name-type">Ethan<br/>McIntyre</h1>
    <span class="name-subtitle">Web Developer</span>
    <a href="/projects" class="landing-btn" role="button">See my work</a>
  </section>
</div>

<style scoped>
  .landing-bg {
    width: 100vw;
    background-color: var(--blue);
    height: 100%;
    display: flex;
    align-items: center;
  }

  .landing-img {
    height: 100%;
    width: 33%;
    object-fit: cover;
  }

  .landing-content {
    color: var(--text-highlight);
    border-radius: var(--spacing-sm);
    padding: var(--spacing-md);
    display: flex;
    flex-direction: column;
  }

  .landing-btn {
    cursor: pointer;
    border-radius: var(--rounding-lg);
    margin-top: var(--spacing-lg);
    background-color: var(--white);
    color: var(--text-inverse);
    width: 66%;
    border: none;
    outline: none;
    padding: var(--spacing-sm);
    font-size: medium;
    text-transform: lowercase;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    transition: all 300ms ease-in-out;
  }

  .landing-btn:hover, .landing-btn:focus {
    outline: solid 2px var(--blue);
    background-color: oklch(from var(--bg-inverse) calc(l - 0.1) c h);
    box-shadow: 0 0px 20px var(--text-highlight);
  }

  .name-type {
    font-size: 5em;
    margin: 0;
    line-height: 140%;
    display: block;
  }

  .name-subtitle {
    font-size: 2em;
    background-color: var(--blue);
    display: inline-block;
  }

</style>
