<script lang="ts">
	import Button from "$lib/components/ui/Button.svelte";
	import AnimateText from "../animation/AnimateText.svelte";

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement;
		target.src = "https://placehold.co/800x600/f8fafc/64748b?text=Dashboard+Preview";
	}
</script>

<header class="px container mx-auto grid gap-16 py-12 pt-24 text-balance" data-enter-container>
	<h1 class="text-display" data-enter>
		<span class="block"><AnimateText text="Your US Visa." /></span>
		<span class="text-emphasis-dim block"><AnimateText text="Ten times faster and cheaper." /></span
		>
	</h1>
</header>
<div class="col-span-full aspect-video" data-enter>
	<img
		src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
		alt="Dashboard Preview"
		class="size-full object-cover"
		onerror={handleImageError}
	/>
</div>
