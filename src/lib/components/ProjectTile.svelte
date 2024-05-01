<script lang="ts">
  export let title: string;
  export let year: string;
  export let desc: string;
  export let image: string;
</script>

<div>
  <img src={image} alt="placeholder alt text">
	<span>{title}</span>
  <span>{year}</span>
  <span>{desc}</span>
</div>
