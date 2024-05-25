<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
	let name: string = '';
	let email: string = '';
	let title: string = '';
	let message: string = '';
</script>

<svelte:head>
	<title>Contact - Ethan McIntyre</title>
</svelte:head>

<div class="w-2/3 mx-auto pt-6">
    <h2 class="mb-4 mr-6 font-bold text-3xl text-center">Contact</h2>
    <form method="post" class="flex flex-col" action="?/submit" use:enhance>
        <div class="grid grid-cols-2 w-full gap-4 mb-8">
            <div class="flex flex-col md:col-span-1 col-span-2">
                <label for="name" placeholder="Your Name" class="font-bold">Name:</label>
                <input
                    name="name"
                    id="name"
                    type="text"
                    class={`${form?.errors?.name ? 'border-red-700' : ''} border-2 p-2 rounded-sm border-stone-700 hover:border-indigo-700 focus:border-indigo-700 bg-white transition-all`}
                    bind:value={name}
                />
            </div>
            <div class="flex flex-col md:col-span-1 col-span-2">
                <label for="email" placeholder="your.email@email.net" class="font-bold">Email:</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    class={`${form?.errors?.email ? 'border-red-700' : ''} border-2 p-2 rounded-sm border-stone-700 hover:border-indigo-700 focus:border-indigo-700 bg-white transition-all`}
                    bind:value={email}
                />
            </div>
        </div>
    </form>
</div>
