<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	// @ts-ignore
	import MenuIcon from 'virtual:icons/mdi/menu';
	export let data;

	function OpenMenu() {
		console.log('opened')
	}
</script>
<div class="h-full flex flex-col">
	<nav class="flex grow-0 flex-wrap items-center px-4 md:px-32 py-2 md:py-4 lg:py-6 border-b-2 bg-white gap-4 w-full">
		<a href="/" class=""><h1 class="text-2xl md:text-4xl italic font-bold font-deco hover:text-indigo-700 transition-all ease-in-out">Ethan McIntyre</h1></a>
		<div class="hidden md:block h-1 w-16 mx-0 border-0 bg-black">&nbsp;</div>
		<a
			aria-current={$page.url.pathname === '/'}
			href="/"
			class={`
				${$page.url.pathname === '/' ? 'text-orange-500 font-semibold underline-offset-4' : 'underline-offset-2'}
				hidden md:block text-xl text-indigo-700 underline hover:underline-offset-8 transition-all ease-in-out`
			}
			>home</a
		>
		<a
			aria-current={$page.url.pathname === '/projects'}
			href="/projects"
			class={`
				${$page.url.pathname === '/projects' ? 'text-orange-500 font-semibold underline-offset-4' : 'underline-offset-2'}
				hidden md:block text-xl text-indigo-700 underline hover:underline-offset-8 transition-all ease-in-out`
			}
			>projects</a
		>
		<a
			aria-current={$page.url.pathname === '/contact'}
			href="/contact"
			class={`
				${$page.url.pathname === '/contact' ? 'text-orange-500 font-semibold underline-offset-4' : 'underline-offset-2'}
				hidden md:block text-xl text-indigo-700 underline hover:underline-offset-8 transition-all ease-in-out`
			}
			>contact</a
		>
		<button><MenuIcon class="block md:hidden text-indigo-700" style="font-size:1.5em"/></button>
	</nav>


	<!-- todo: tweak/customize this? -->
	{#key data.pathname}
		<div
			id="main-container"
			class="flex grow w-full overflow-scroll"
			in:fade={{ duration: 300, delay: 400 }}
			out:fade={{ duration: 300 }}
		>
			<slot />
		</div>
	{/key}

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
