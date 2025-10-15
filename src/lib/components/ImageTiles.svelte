<script lang="ts">
  interface Props {
    cover: string;
    images: string[];
    selectedImage: SelectedImage;
  }

  const { cover, images, selectedImage = $bindable() }: Props = $props();

  const openImage = (image: string) => {
    selectedImage.image = image;
    selectedImage.isSelected = true;
  };
</script>

<!-- svelte-ignore a11y_img_redundant_alt -->
<button onclick={() => openImage(cover)}
  ><img
    class="border-2 border-stone-50 object-cover w-full h-full cursor-pointer hover:opacity-80 hover:hue-rotate-50 hover:border-indigo-500"
    alt="Project image"
    src={cover}
  /></button
>
{#if images.length > 0}
  <div class="grid grid-cols-3 gap-2 mt-2">
    {#each images as image, i}

      <button
        type="button"
        aria-label={`Project image #${i}`}
        onclick={() => openImage(image)}
        class={`col-span-${i % 3 === 0 ? "1" : "2"} group-hover:shadow-lg`}
      >
        <img
          class="border-2 border-stone-50 object-cover w-full h-full cursor-pointer hover:opacity-80 hover:hue-rotate-50 hover:border-indigo-500"
          alt={image}
          src={image}
        />
      </button>
    {/each}
  </div>
{/if}
