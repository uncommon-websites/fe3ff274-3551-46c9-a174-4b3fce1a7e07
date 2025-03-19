<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte'
	import AnimateText from '../animation/AnimateText.svelte'

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement
		target.src = 'https://placehold.co/800x600/f8fafc/64748b?text=Dashboard+Preview'
	}
</script>

<header class="px container mx-auto grid gap-16 py-12 pt-24 text-pretty" data-enter-container>
	<h1 class="text-display" data-enter>
		<span class="block"><AnimateText text="Your US Visa." /></span>
		<span class="text-emphasis-low block"><AnimateText text="Ten times faster and cheaper." /></span
		>
	</h1>
</header>
<div class="col-span-full aspect-[2/1] rounded-lg ring-1 ring-gray-50" data-enter>
	<img
		src="https://placehold.co/800x600/f8fafc/64748b?text=Dashboard+Preview"
		alt="Dashboard Preview"
		class="size-full object-cover"
		onerror={handleImageError}
	/>
</div>
