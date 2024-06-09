<script lang="ts">
	import ProjectTile from '$lib/components/ProjectTile.svelte';
	import NameType from '$lib/assets/name_stacked.png';
	import EthanImg from '$lib/assets/photo_of_me.jpg';
	import GitHubIcon from 'virtual:icons/mdi/github-box';
	import LinkedinIcon from 'virtual:icons/mdi/linkedin';
	import ForwardArrow from 'virtual:icons/ic/baseline-arrow-forward';
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home - Ethan McIntyre</title>
</svelte:head>

<div
	class="h-full flex flex-col md:flex-row overflow-hidden bg-stone-50 transition-all ease-in-out"
>
	<div class="flex-grow-0 h-1/3 md:h-full md:w-1/3 overflow-hidden relative md:border-r-2">
		<img class="object-cover md:h-full" src={EthanImg} alt="A photo of Ethan McIntyre" />
	</div>
	<div class="grow my-auto p-4 md:p-32 text-xl">
		<h2
			class="text-5xl md:text-6xl font-deco font-bold italic underline mb-2 tracking-tight subpixel-antialiased"
		>
			Hello!
		</h2>
        <div id="bioContainer">
            <PortableText value={data?.content[0]?.content || null}></PortableText>
        </div>
		<div class="flex text-3xl">
			<a href="https://github.com/ethanmci" class="icon-link"
				><GitHubIcon alt="GitHub link" class="hover:text-indigo-900 cursor-pointer"></GitHubIcon></a
			>
			<a href="https://www.linkedin.com/in/ethansndrmc/" class="icon-link"
				><LinkedinIcon alt="GitHub link" class="hover:text-indigo-900 cursor-pointer"
				></LinkedinIcon></a
			>
		</div>
		<br />
		<a href="/projects">
            <button class="flex font-deco font-bold p-2 text-stone-50 bg-indigo-700 hover:bg-indigo-900 hover:shadow-sm rounded-sm transition-all ease-in-out"
			    >Check out my projects<ForwardArrow class="my-auto ml-2" /></button
		    >
        </a>
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
