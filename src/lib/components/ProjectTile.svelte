<script lang="ts">
	import { fly } from "svelte/transition";
	import { onMount } from "svelte";
	import { quartInOut } from "svelte/easing";
	export let title: string;
	export let year: string;
	export let desc: string;
	export let image: string;
	export let url: string;
	export let transitionDelay: number;
	let ready: boolean = false;
    onMount(() => { ready = true })
</script>
{#if ready}
<a href={url} transition:fly={{ delay: 5 * (transitionDelay * 2), duration: 1000, y: 200, opacity: 0.0, easing: quartInOut }}>
	<button class="h-auto md:h-full flex group col-span-3 md:col-span-1 mx-auto" tabindex="0">
		<div
			class="relative bg-stone-50 text-stone-900 border-2 border-stone-50 group-hover:border-indigo-500 shadow-sm group-hover:shadow-lg transition-all ease-in-out"
		>
			<div class="relative">
				<img src={image} alt="placeholder alt text" class="w-full mx-auto mb-4" />
				<div class="absolute -bottom-4 flex w-full px-4 text-stone-50">
					<span class="flex-1">
						<h3 class="text-2xl text-left font-deco font-bold underline w-max p-2 bg-stone-700 rounded-sm shadow-sm max-w-64">
							{title}
						</h3>
					</span>
					<p class="place-self-end text-right font-deco text-2xl w-max p-2 bg-stone-700 rounded-sm shadow-sm">
						{year}
					</p>
				</div>
			</div>
			<div class="p-4">
				<span>{desc}</span>
			</div>
		</div>
	</button>
</a>
{/if}

