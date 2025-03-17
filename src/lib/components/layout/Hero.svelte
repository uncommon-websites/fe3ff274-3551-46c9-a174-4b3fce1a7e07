<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte'
	import AnimateText from '../animation/AnimateText.svelte'

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement
		target.src = 'https://placehold.co/800x600/f8fafc/64748b?text=Dashboard+Preview'
	}
</script>

<header
	class="px container mx-auto grid gap-16 py-24 text-pretty lg:grid-cols-2"
	data-enter-container
>
	<h1 class="text-display" data-enter>
		<AnimateText text="The best service for founders" />
	</h1>

	<div class="grid content-between">
		<p class="text-gray-700" data-enter>
			Our platform helps you focus on what matters - building your business without the technical
			overhead.
		</p>

		<div class="mt-4 flex gap-4" data-enter>
			<Button variant="primary">Get Started</Button>
			<Button variant="secondary">Learn More</Button>
		</div>
	</div>
</header>
<div class="col-span-full aspect-[2/1] rounded-lg ring-1 ring-gray-50" data-enter>
	<img
		src="https://placehold.co/800x600/f8fafc/64748b?text=Dashboard+Preview"
		alt="Dashboard Preview"
		class="size-full object-cover"
		onerror={handleImageError}
	/>
</div>
