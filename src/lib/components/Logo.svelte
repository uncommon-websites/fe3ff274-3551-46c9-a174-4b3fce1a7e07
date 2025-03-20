<script lang="ts">
	// Types
	import type { HTMLAttributes } from "svelte/elements";

	// Props
	const props: HTMLAttributes<SVGSVGElement> = $props();
</script>

<svg class={props.class} viewBox="0 0 64 64">
	<rect width="64" height="64" fill="currentColor" />
</svg>
