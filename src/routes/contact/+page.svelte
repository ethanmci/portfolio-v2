<script lang="ts">
	import { enhance } from '$app/forms';
	// initializing all varables at once
	let name: string = '',
		email: string = '',
		title: string = '',
		message: string = '';
	let nameError: boolean = false,
		emailError: boolean = false,
		messageError: boolean = false;

	const emailReg: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;	
	$: nameError = name.length <= 0;
	$: emailError = !emailReg.test(email);
	$: messageError = message.length <= 0;
</script>

<svelte:head>
	<title>Contact - Ethan McIntyre</title>
</svelte:head>

<div class="w-2/3 mx-auto pt-6">
	<h2 class="mb-4 font-bold font-deco text-5xl lg:text-left text-center">Contact</h2>
	<form method="post" class="flex flex-col" action="?/submit" use:enhance>
		<div class="grid grid-cols-2 w-full gap-4 mb-4">
			<div class="flex flex-col md:col-span-1 col-span-2">
				<label for="name" placeholder="Your Name" class="font-bold">Name:</label>
				<input
					name="name"
					id="name"
					type="text"
					class={`${nameError ? 'border-red-700' : 'border-stone-700'} border-2 p-2 rounded-sm bg-white transition-all`}
					bind:value={name}
				/>
			</div>
			<div class="flex flex-col md:col-span-1 col-span-2">
				<label for="email" placeholder="your.email@email.net" class="font-bold">Email:</label>
				<input
					name="email"
					id="email"
					type="email"
					class={`${emailError ? 'border-red-700' : 'border-stone-700'} border-2 p-2 rounded-sm  bg-white transition-all`}
					bind:value={email}
				/>
			</div>
		</div>

		<label for="title" placeholder="Message Title" class="font-bold"
			>Title <span class="font-normal">(Optional)</span>:</label
		>
		<input
			name="title"
			id="title"
			type="text"
			class={`border-2 p-2 mb-4 rounded-sm border-stone-700 bg-white transition-all`}
			bind:value={title}
		/>

		<label for="message" placeholder="Message Title" class="font-bold">Message:</label>
		<textarea
			name="message"
			id="name"
			rows="10"
			class={`${messageError ? 'border-red-700' : 'border-stone-700'} border-2 p-2 mb-4 rounded-sm bg-white transition-all`}
			bind:value={message}
		/>
		<input
			class="flex font-deco font-bold p-2 w-1/3 text-stone-50 bg-indigo-700 hover:bg-indigo-900 hover:shadow-sm rounded-sm transition-all ease-in-out"
			value="Submit"
			type="submit"
		/>
	</form>
</div>
