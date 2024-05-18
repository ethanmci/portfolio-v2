<script lang="ts">
	export let title: string;
	export let year: string;
	export let desc: string;
	export let image: string;
  export let url: string;
</script>

<button class="h-auto flex group" tabindex="0" role="button">
  <div class="relative bg-stone-50 text-stone-900 border-2 border-stone-50 group-hover:border-indigo-500 shadow-sm group-hover:shadow-lg transition-all ease-in-out">
    <div class="relative">
      <img src={image} alt="placeholder alt text" class="group-hover:sepia w-full mx-auto mb-4" />
      <div class="absolute -bottom-4 flex w-full px-4 text-stone-50">
        <span class="flex-1">
          <h3 class="text-2xl font-bold underline w-max p-2 bg-stone-700 rounded-sm shadow-sm">{title}</h3>
        </span>
        <p class="text-right text-2xl my-auto w-max p-2 bg-stone-700 rounded-sm shadow-sm">{year}</p>
      </div>
    </div>
    <div class="p-4">
      <span>{desc}</span>
    </div>
  </div>
</button>

