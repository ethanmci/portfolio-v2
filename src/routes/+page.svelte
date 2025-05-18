<script lang="ts">
import EthanImg from "$lib/assets/photo_of_me.jpg"; // @ts-ignore (virtual: flags TS checker incorrectly)
import GitHubIcon from "virtual:icons/mdi/github-box"; // @ts-ignore
import LinkedinIcon from "virtual:icons/mdi/linkedin"; // @ts-ignore
import ForwardArrow from "virtual:icons/ic/baseline-arrow-forward";
import { PortableText } from "@portabletext/svelte";
import type { PageData } from "./$types";
import { onMount } from "svelte";
import { fly } from "svelte/transition";
import { backOut, quartInOut, quartOut } from "svelte/easing";
import IconButton from "$lib/components/IconButton.svelte";

export let data: PageData;

let ready: boolean = false;
onMount(() => {
  ready = true;
});
</script>

<svelte:head>
	<title>Home - Ethan McIntyre</title>
</svelte:head>

<div
	class="h-full w-full flex flex-col md:flex-row overflow-hidden bg-stone-50 transition-all ease-in-out"
>
	<div class="flex-grow-0 h-1/3 md:h-full md:w-1/3 overflow-hidden relative md:border-r-2">
		{#if ready}
			<img
				transition:fly={{ delay: 200, duration: 2500, x: -1000, opacity: 0.0, easing: quartOut }}
				class="object-cover md:h-full"
				src={EthanImg}
				alt="Ethan McIntyre"
			/>
		{/if}
	</div>
	<div class="grow my-auto p-4 md:p-32 text-xl">
		{#if ready}
			<h2
				transition:fly={{ delay: 0, duration: 1000, x: 200, opacity: 0.2, easing: quartInOut }}
				class="text-5xl md:text-6xl font-deco font-bold italic underline mb-2 tracking-tight subpixel-antialiased"
			>
				Hello!
			</h2>
			<div
				id="bioContainer"
				class="mb-4"
				transition:fly={{ delay: 100, duration: 1500, y: 200, opacity: 0.0, easing: quartInOut }}
			>
				<PortableText components={{}} value={data?.content[0]?.content || undefined}></PortableText>
			</div>
			<a href="/projects">
				<button
					transition:fly={{ delay: 500, duration: 1500, y: 300, opacity: 0.0, easing: quartInOut }}
					class="w-full h-28 flex items-center align-middle font-deco font-bold p-4 text-stone-50 bg-indigo-700 hover:bg-indigo-900 hover:shadow-sm rounded-sm transition-all ease-in-out"
					>Check out my projects<ForwardArrow class="text-2xl my-auto ml-2" /></button
				>
			</a>
			<div
				class="flex gap-4 w-full my-4"
			>	
				<IconButton url="https://github.com/ethanmci" colour="stone"><GitHubIcon class="text-2xl mr-4 my-auto"/>GitHub</IconButton>
				<IconButton url="https://www.linkedin.com/in/ethansndrmc/" colour="stone"><LinkedinIcon class="text-2xl mr-4 my-auto" />LinkedIn</IconButton>
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	
	:global(#bioContainer a):not(.icon-link) {
		text-decoration: underline;
		color: theme(colors.indigo.700);
		transition: 0.3s;
	}

	:global(#bioContainer a):not(.icon-link):hover {
		text-decoration: underline;
		text-underline-offset: 8px;
		color: theme(colors.indigo.800);
	}
</style>
