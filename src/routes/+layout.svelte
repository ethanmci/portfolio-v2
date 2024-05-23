<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	export let data;
</script>

<nav class="flex items-center px-14 py-6 border-b-2 bg-white gap-4">
	<h1 class="text-3xl font-bold">Ethan McIntyre</h1>
	<div class="h-1 w-14 my-0 mx-0 border-0 bg-black rounded-sm">&nbsp;</div>
	<a href="/" class="text-xl text-indigo-700 underline underline-offset-2 hover:underline-offset-4 transition-all ease-in-out">home</a>
	<a href="/projects" class="text-xl text-indigo-700 underline underline-offset-2 hover:underline-offset-4 transition-all ease-in-out">projects</a>
	<a href="/contact" class="text-xl text-indigo-700 underline underline-offset-2 hover:underline-offset-4 transition-all ease-in-out">contact</a>
</nav>

{#key data.pathname}
<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }} >
	<slot />
</div>
{/key}

<!-- Footer idea for now 
<footer class="flex items-center px-14 py-6 border-b-2 bg-white gap-4">
	
</footer>

-->

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.neutral.300);
	}
</style>