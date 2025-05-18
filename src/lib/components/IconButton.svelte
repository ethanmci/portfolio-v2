<script lang="ts">
// TODO: height control!
import { fly } from "svelte/transition";
import { quartInOut } from "svelte/easing";
// Valid colour verification? in the future
    interface Props {
        url?: string;
        colour?: string;
        children?: import('svelte').Snippet;
    }

    const { url = "", colour = "", children }: Props = $props();
</script>

<a href={ url } class="flex flex-1">
    <button
        transition:fly={{ delay: 500, duration: 1500, y: 300, opacity: 0.0, easing: quartInOut }}
        class={`w-full flex items-center align-middle font-deco font-bold p-4 text-stone-50 bg-${colour}-700 hover:bg-${colour}-900 hover:shadow-sm rounded-sm transition-all ease-in-out`}
        >
         {@render children?.()}
        </button
    >
</a>