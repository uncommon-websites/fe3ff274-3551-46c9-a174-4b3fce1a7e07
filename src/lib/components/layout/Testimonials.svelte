<script lang="ts">
	// Components
	import Button from "../ui/Button.svelte";
	import SectionHeader from "./SectionHeader.svelte";

	// Icons
	import IconArrowRight from "~icons/lucide/arrow-right";
	import IconArrowLeft from "~icons/lucide/arrow-left";

	// Types
	type Testimonial = {
		name: string;
		position: string;
		company: string;
		quote: string;
		image: string; // a 9/16 portrait image of a person
	};

	// Props
	let { testimonials }: { testimonials: Testimonial[] } = $props();

	// State
	let current = $state(0);
	let elements: Element[] = $state([]);
	let containerRef: HTMLDivElement;

	// Utils
	import { onMount, tick } from "svelte";

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

	async function select(index: number) {
		current = index;
		await tick(); // Wait for the DOM to update
		if (elements[index]) {
			elements[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
		}
	}
</script>

<section
	class="overflow-clip text-pretty [--gap:--spacing(4)] [--inner-radius:calc(var(--radius)-var(--gap))] [--radius:var(--radius-3xl)]"
>
	<div class="section-px section-py container mx-auto grid">
		<div class="mb-8 flex flex-col items-baseline justify-between lg:mb-0 lg:flex-row lg:pb-0">
			<!-- <SectionHeader title="Real feedback from people who trust our solution" /> -->
			<!-- subtitle="" -->

			<div class="mb-8 flex items-center gap-4 self-end lg:self-auto">
				<Button
					iconOnly
					rounded
					variant="secondary"
					onclick={() => select((current - 1 + testimonials.length) % testimonials.length)}
					aria-label="Previous testimonial"
					prefix={IconArrowLeft}
				></Button>
				<Button
					iconOnly
					rounded
					variant="secondary"
					onclick={() => select((current + 1) % testimonials.length)}
					aria-label="Next testimonial"
					suffix={IconArrowRight}
				></Button>
			</div>
		</div>

		<div
			bind:this={containerRef}
			class="no-scrollbar touch:overflow-x-scroll flex snap-x snap-mandatory gap-(--card-gap) overflow-x-visible [--card-gap:--spacing(6)]"
		>
			{#each testimonials as testimonial, index}
				<article
					onclick={() => select(index)}
					aria-role="button"
					bind:this={elements[index]}
					class="lg:container-xs items-between grid aspect-video max-w-full min-w-full snap-start grid-cols-1 gap-8 rounded-(--radius) bg-gray-50 p-(--gap) transition duration-500 ease-out md:min-w-[65%] md:grid-cols-[2fr_3fr] dark:bg-gray-900 dark:text-white"
					class:duration-300={true}
					style:transform="translateX(calc(-{current * 100}% - var(--card-gap) * {current}))"
				>
					<div class="hidden rounded-(--inner-radius) lg:block">
						{#if testimonial.image}
							<img
								src={testimonial.image}
								alt="{testimonial.name} testimonial"
								loading="lazy"
								class="aspect-[3/4] h-full w-full rounded-(--inner-radius) object-cover"
							/>
						{/if}
					</div>
					<div class="flex flex-col justify-between gap-12">
						<q class="text-title3 text-emphasis-high max-w-prose">{testimonial.quote}</q>
						<cite class="text-caption flex items-center gap-3 not-italic">
							{#if testimonial.image}
								<img
									src={testimonial.image}
									alt="{testimonial.name} testimonial"
									loading="lazy"
									class="size-12 rounded-full object-cover lg:hidden"
								/>
							{/if}
							<div>
								<p class="text-callout">{testimonial.name}</p>
								<p class="text-emphasis-low">
									{testimonial.position}, {testimonial.company}
								</p>
							</div>
						</cite>
					</div>
				</article>
			{/each}
		</div>

		<!-- Pagination Indicators -->
		<div class="mt-4 flex justify-center gap-2">
			{#each testimonials as _, index}
				<button
					class="focus:ring-primary-500 bg-emphasis-dim size-1.5 rounded-full transition-all duration-300 ease-in-out focus:ring-2 focus:outline-none"
					class:opacity-50={current !== index}
					class:w-8={current === index}
					onclick={() => select(index)}
					aria-label="Go to testimonial {index + 1}"
				></button>
			{/each}
		</div>
	</div>
</section>
