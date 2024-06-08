<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	// @ts-ignore
	import MenuIcon from 'virtual:icons/mdi/menu';
	export let data;

	function OpenMenu() {
		console.log('opened')
	}
</script>

<nav class="flex flex-wrap items-center px-4 md:px-32 py-2 border-b-2 bg-white gap-4 w-full">
	<a href="/" class=""><h1 class="text-2xl md:text-5xl italic font-bold font-deco hover:text-indigo-700 transition-all ease-in-out">Ethan McIntyre</h1></a>
	<div class="hidden md:block h-1 w-16 mx-0 border-0 bg-black">&nbsp;</div>
	<a
		href="/"
		class="hidden md:block text-2xl text-indigo-700 underline underline-offset-2 hover:underline-offset-4 transition-all ease-in-out"
		>home</a
	>
	<a
		href="/projects"
		class="hidden md:block  text-2xl text-indigo-700 underline underline-offset-2 hover:underline-offset-4 transition-all ease-in-out"
		>projects</a
	>
	<a
		href="/contact"
		class="hidden md:block text-2xl text-indigo-700 underline underline-offset-2 hover:underline-offset-4 transition-all ease-in-out"
		>contact</a
	>
	<button><MenuIcon class="block md:hidden text-indigo-700" style="font-size:1.5em"/></button>
</nav>


<!-- todo: tweak/customize this? -->
{#key data.pathname}
	<div
		class="px-16 md:px-32 to-indigo-50 min-h-fit w-full"
		in:fade={{ duration: 300, delay: 400 }}
		out:fade={{ duration: 300 }}
	>
		<slot />
	</div>
{/key}

<!-- Footer idea for now 
<footer class="flex items-center px-14 py-6 border-b-2 bg-white gap-4"></footer>
-->

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.neutral.300);
	}

	:global(body) {
		min-height: 100%;
		width: 100%;
		position: relative;
	}
</style>
