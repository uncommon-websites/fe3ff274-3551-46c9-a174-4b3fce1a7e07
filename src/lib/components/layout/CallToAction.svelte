<script lang="ts">
	// Components
	import Button from "../ui/Button.svelte";
</script>

<div class="bg-gray-100">
	<section class="section-px section-py container mx-auto">
		<div
			class="grid aspect-[2/1] grid-cols-[2fr_1fr] content-start items-center justify-between gap-(--gap) rounded-(--radius) bg-white p-(--gap) text-balance [--gap:--spacing(6)] [--inner-radius:calc(var(--radius)-var(--gap))] [--radius:var(--radius-3xl)]"
		>
			<div class="items-between grid h-full content-between gap-16">
				<h2 class="text-title2 mb-3">Ready to get started?</h2>
				<div class="flex flex-col items-start justify-start gap-4">
					<p class="text-headline text-emphasis-low">
						Join thousands of satisfied customers who have already taken the next step.
					</p>
					<div class="flex gap-2">
						<Button href="/contact">Contact Sales</Button>
						<Button href="/signup" variant="secondary">Sign Up Free</Button>
					</div>
				</div>
			</div>
			<img
				src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
				alt="Visual comparison showing product benefits"
				class="h-full max-h-full w-full rounded-(--inner-radius) object-cover"
			/>
		</div>
	</section>
</div>
