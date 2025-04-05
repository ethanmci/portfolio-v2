<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { fade, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	// @ts-ignore
	import MenuIcon from 'virtual:icons/mdi/menu'; // @ts-ignore
	import CloseIcon from 'virtual:icons/mdi/close';
	export let data;
	let mobileMenuOpen: boolean;
	$: mobileMenuOpen = false;

	function ToggleMobileMenu(openVal: boolean) {
		mobileMenuOpen = openVal;
	}
</script>

<div class="h-full flex flex-col">
	<nav
		class="flex grow-0 flex-wrap items-center px-4 md:px-32 py-2 md:py-4 lg:py-6 border-b-2 bg-white gap-4 w-full"
	>
		<a href="/" class=""
			><h1
				class="text-2xl md:text-4xl italic font-bold font-deco hover:text-indigo-700 transition-all ease-in-out"
			>
				Ethan McIntyre
			</h1></a
		>
		<div class="hidden md:block h-1 w-16 mx-0 border-0 bg-black">&nbsp;</div>
		<a
			aria-current={$page.url.pathname === '/'}
			href="/"
			class={`
				${$page.url.pathname === '/' ? 'text-indigo-900 font-semibold underline-offset-4' : 'underline-offset-1'}
				hidden md:block text-xl text-indigo-700 underline hover:underline-offset-8 transition-all ease-in-out`}
			>home</a
		>
		<a
			aria-current={$page.url.pathname === '/projects'}
			href="/projects"
			class={`
				${$page.url.pathname === '/projects' ? 'text-indigo-900 font-semibold underline-offset-4' : 'underline-offset-1'}
				hidden md:block text-xl text-indigo-700 underline hover:underline-offset-8 transition-all ease-in-out`}
			>projects</a
		>
		<a
			aria-current={$page.url.pathname === '/contact'}
			href="/contact"
			class={`
				${$page.url.pathname === '/contact' ? 'text-indigo-900 font-semibold underline-offset-4' : 'underline-offset-1'}
				hidden md:block text-xl text-indigo-700 underline hover:underline-offset-8 transition-all ease-in-out`}
			>contact</a
		>
		<button class="ml-auto" on:click={() => ToggleMobileMenu(true)}
			><MenuIcon class="block md:hidden  text-indigo-700" style="font-size:1.5em" /></button
		>
	</nav>

	<!-- todo: tweak/customize this? -->
	{#key data.pathname}
		<div
			id="main-container"
			class="flex grow w-full overflow-y-scroll overflow-x-hidden m-0"
			in:fade={{ duration: 300, delay: 400 }}
			out:fade={{ duration: 300 }}
		>
			<slot />
		</div>
	{/key}

	{#if mobileMenuOpen === true}
		<div
			transition:slide={{ delay: 0, duration: 300, easing: quintOut, axis: 'x' }}
			class={`bg-indigo-700 absolute w-full h-full z-50 p-20 block md:hidden`}
		>
			<button class="absolute right-4 top-4" on:click={() => ToggleMobileMenu(false)}
				><CloseIcon
					class="block md:hidden text-white hover:bg-red-700"
					style="font-size:2em"
				/></button
			>
			<div class="flex flex-col gap-5">
				<a
					aria-current={$page.url.pathname === '/'}
					href="/"
					on:click={() => ToggleMobileMenu(false)}
					class={`
				${$page.url.pathname === '/' ? 'text-white font-bold underline-offset-4' : 'underline-offset-2'}
				text-4xl text-gray-300 underline hover:underline-offset-8 transition-all ease-in-out`}>home</a
				>
				<a
					aria-current={$page.url.pathname === '/projects'}
					href="/projects"
					on:click={() => ToggleMobileMenu(false)}
					class={`
				${$page.url.pathname === '/projects' ? 'text-white font-bold underline-offset-4' : 'underline-offset-2'}
				text-4xl text-gray-300 underline hover:underline-offset-8 transition-all ease-in-out`}>projects</a
				>
				<a
					aria-current={$page.url.pathname === '/contact'}
					href="/contact"
					on:click={() => ToggleMobileMenu(false)}
					class={`
				${$page.url.pathname === '/contact' ? 'text-white font-bold underline-offset-4' : 'underline-offset-2'}
				text-4xl text-gray-300 underline hover:underline-offset-8 transition-all ease-in-out`}>contact</a
				>
			</div>
		</div>
	{/if}
</div>

<!-- Footer idea for now 
<footer class="flex items-center px-14 py-6 border-b-2 bg-white gap-4"></footer>
-->

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.neutral.300);
	}

	:global(body, html) {
		height: 100%;
		margin: 0;
		width: 100%;
		position: relative;
	}
</style>
