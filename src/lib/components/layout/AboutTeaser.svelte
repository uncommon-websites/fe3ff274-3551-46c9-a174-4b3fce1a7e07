<!--
@component AboutTeaser
This component is a teaser for the about page.
-->

<script lang="ts">
	// Types

	import Button from "../ui/Button.svelte";

	// Components

	// Utils

	// Props
	// const {}: {} = $props();
</script>

<section
	class="section-px section-py [--gap:--spacing(4)] [--inner-radius:calc(var(--radius)-var(--gap))] [--radius:var(--radius-xl)]"
>
	<div class="container mx-auto grid gap-(--gap) rounded-(--radius) lg:grid-cols-2">
		<div class="overflow-clip rounded-(--radius) bg-gray-50">
			<img
				src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Our team at work"
				class="aspect-[3/2] size-full max-h-full object-cover"
			/>
		</div>
		<div
			class="grid content-between gap-8 rounded-(--radius) bg-gray-50 p-(--gap) dark:bg-gray-900"
		>
			<div>
				<h2 class="text-title2 mb-4">About Us</h2>
				<p class="text-body text-emphasis-medium">
					We are a team of passionate developers dedicated to creating innovative solutions for our
					clients.
				</p>
			</div>
			<div>
				<Button href="/about" variant="secondary">Learn More</Button>
			</div>
		</div>
	</div>
</section>
