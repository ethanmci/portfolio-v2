<script lang="ts">
  interface Props {
    tag: any;
  }

  let { tag }: Props = $props();

function tagColour(tagValue: string): string {
  switch (tagValue?.toLocaleLowerCase() || "") {
    case "web":
      return "bg-blue-700";
    case "game dev":
      return "bg-violet-700";
    case "design":
      return "bg-pink-700";
    case "university":
      return "bg-red-700";
    case "personal":
      return "bg-rose-700";
    default:
      return "bg-slate-700";
  }
}
</script>

<div class={`${tagColour(tag)} text-sm p-1 rounded-sm text-slate-50`}>
    {tag}
</div>