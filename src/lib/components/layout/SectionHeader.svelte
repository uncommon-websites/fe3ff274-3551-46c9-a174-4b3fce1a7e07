<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";

	// Props
	let { title = "", subtitle = "", oncomplete = () => {} } = $props();
</script>

<div class="section-pb-sm text-title2 container-sm grid text-balance">
	<h2>
		<AnimateText text={title} {oncomplete} />
	</h2>
	<p class="text-emphasis-dim">
		<AnimateText text={subtitle} />
	</p>
</div>
