<script lang="ts">
import { page } from "$app/state";
import type { PageData } from "./$types";
import type { InputValue } from "@portabletext/svelte";
import { PortableText } from "@portabletext/svelte";
import Tags from "$lib/components/Tags.svelte";
// @ts-ignore
import BackArrow from "virtual:icons/ic/baseline-arrow-back";

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<div class="p-4 md:px-32 mx-auto py-4 h-full flex flex-col">
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
		<div class="col-span-3 md:col-span-2"><img src={data.project.cover} alt="project cover" class="border-2 border-stone-50 object-contain" /></div>
		<div class="col-span-3 md:col-span-1 bg-stone-50 overflow-y-scroll rounded-sm p-8">
			<div class="relative min-h-full">
				<PortableText value={data.project.content} components={{}}/>
			</div>
		</div>
	</div>
</div>
