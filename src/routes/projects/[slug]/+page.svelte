<script lang="ts">
	import type { PageData } from './$types';
	import { PortableText } from '@portabletext/svelte';
	import Tags from '$lib/components/Tags.svelte';
	// @ts-ignore TODO: fix virtual:icons issue
	import BackArrow from 'virtual:icons/ic/baseline-arrow-back';
	// @ts-ignore
	import CloseIcon from 'virtual:icons/mdi/close';
	import ImageTiles from '$lib/components/ImageTiles.svelte';

	
	export let data: PageData;
	let selectedImage: SelectedImage = {
		isSelected: false,
		image: null
	};

	$: console.log(selectedImage)
</script>

{#if selectedImage.isSelected && selectedImage.image != null}
	<button tabindex="0" on:click={() => { selectedImage.isSelected = false}} class="z-40 group/close absolute flex h-full w-full overflow-hidden bg-stone-700/75 items-center justify-center">
		<div class="absolute right-10 top-10"
			><CloseIcon
				class="block text-white group-hover/close:bg-red-700"
				style="font-size:2em"
			/></div>
		<!-- svelte-ignore a11y-missing-attribute -->

		<img
			class="z-50 border-2 border-stone-50 object-cover h-2/3"
			src={selectedImage.image}
		/>
	</button>
{/if}

<div class="p-4 md:px-32 mx-auto py-4 flex flex-col mb-20">
	<a href="/projects"
		><button
			class="flex align-middle text-indigo-700 underline underline-offset-4 hover:underline-offset-8 p-1 rounded-sm transition-all ease-in-out"
			><BackArrow class="my-auto mr-1" />Back to projects</button
		></a
	>
	<h2 class="mb-4 font-bold font-deco text-4xl md:text-5xl text-center lg:text-left">
		{data.project.title}
	</h2>
	<div class="flex flex-row gap-2 mb-2">
		{#each data.project.tags as tag}
			<Tags {tag}></Tags>
		{/each}
	</div>
	<!-- todo, get this to resize properly using flex :))) -->
	<div class="w-full grow grid grid-cols-3 gap-4">
		<!-- TODO: proper alt text -->
		<div class="col-span-3 md:col-span-2">
			<ImageTiles cover={data.project.cover} images={data.project.carousel} bind:selectedImage={selectedImage}/>
		</div>
		<div class="col-span-3 md:col-span-1 bg-stone-50 overflow-y-scroll rounded-sm p-8">
			<PortableText value={data.project.content} components={{}} />
		</div>
	</div>
</div>
