<script lang="ts">
  interface Props {
    size?: string;
    color?: string;
  }

  const { size = "2em", color = "currentColor" }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox={`0 0 24 24`}
  fill="none"
  stroke={color}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-x-icon lucide-x"
  ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
>
