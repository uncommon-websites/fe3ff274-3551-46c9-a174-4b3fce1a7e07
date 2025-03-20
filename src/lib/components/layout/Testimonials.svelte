<script lang="ts">
	// Types
	type Testimonial = {
		name: string;
		position: string;
		company: string;
		quote: string;
		image: string;
	};

	// Components
	import SectionHeader from "./SectionHeader.svelte";

	// Props
	let { testimonials }: { testimonials: Testimonial[] } = $props();

	// State
	let current = $state(0);

	// Utils
	import { onMount } from "svelte";

	// Preload images lazily
	onMount(() => {
		if (testimonials.length) {
			testimonials.forEach((testimonial, index) => {
				if (index !== current && testimonial.image) {
					const img = new Image();
					img.loading = "lazy";
					img.src = testimonial.image;
				}
			});
		}
	});
</script>

<section
	class="text-pretty [--gap:--spacing(4)] [--inner-radius:calc(var(--radius)-var(--gap))] [--radius:var(--radius-3xl)]"
>
	<div class="section-px section-py container mx-auto grid">
		<SectionHeader
			title="What Our Clients Say"
			subtitle="Real feedback from people who trust our solution"
		/>

		<div class="grid gap-(--gap)">
			{#each testimonials as testimonial}
				<article
					class="container-xs grid aspect-[2/1] grid-cols-1 gap-8 rounded-(--radius) bg-gray-50 p-(--gap) md:grid-cols-[1fr_2fr] dark:bg-gray-900"
				>
					<div class="overflow-clip rounded-(--inner-radius) bg-gray-100">
						{#if testimonial?.image}
							<img
								src={testimonial.image}
								alt="{testimonial.name} testimonial"
								loading="lazy"
								class="aspect-[3/2] size-full max-h-full object-cover"
							/>
						{/if}
					</div>
					<div class="flex flex-col justify-between gap-12">
						<q class="text-headline text-emphasis-medium max-w-prose">{testimonial.quote}</q>

						<cite class="text-caption mb-4 not-italic">
							<p class="text-callout">{testimonial.name}</p>
							<p class="text-emphasis-low">{testimonial.position}, {testimonial.company}</p>
						</cite>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
