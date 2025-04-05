<script lang="ts">
	export let cover: string;
	export let images: string[];
    export let selectedImage: SelectedImage;
    
    const openImage = (image: string) => {
        selectedImage.image = image
        selectedImage.isSelected = true;
    }
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<img class="border-2 border-stone-50" alt="project image" src={cover} />
{#if images.length > 0}
	<div class="grid grid-cols-3 gap-2 mt-2">
		{#each images as image, i}
			<button on:click={() => openImage(image)} class={`col-span-${i % 3 === 0 ? '1' : '2'} group-hover:shadow-lg`}>
				<!-- svelte-ignore a11y-missing-attribute -->
				<img 
					class="border-2 border-stone-50 object-cover w-full h-full cursor-pointer hover:opacity-80 hover:hue-rotate-50"
					src={image}
				/>
            </button>
		{/each}
	</div>
{/if}
