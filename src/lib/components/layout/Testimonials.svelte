<script lang="ts">
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
	let scrollProgress = $state(0);
	let wrapperRef: HTMLElement;
	let containerOffset = $state(0);

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

		// Calculate container offset for first testimonial alignment
		const calculateContainerOffset = () => {
			const containerWidth =
				document.querySelector(".container")?.getBoundingClientRect().left || 0;
			containerOffset = containerWidth;
		};

		calculateContainerOffset();
		window.addEventListener("resize", calculateContainerOffset);

		// Set up scroll event handler
		const handleScroll = () => {
			if (!wrapperRef) return;

			const rect = wrapperRef.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			// Calculate scroll progress through the section (0-1)
			const sectionTop = rect.top;
			const sectionHeight = rect.height;
			const scrollRange = sectionHeight - windowHeight;

			// Normalize to 0-1 range
			let progress = 0;
			if (sectionTop <= 0) {
				progress = Math.min(Math.abs(sectionTop) / scrollRange, 1);
			}

			scrollProgress = progress;
			current = Math.min(Math.floor(progress * testimonials.length), testimonials.length - 1);
		};

		window.addEventListener("scroll", handleScroll);

		// Initial call to set positions
		setTimeout(handleScroll, 100);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", calculateContainerOffset);
		};
	});
</script>

<section
	bind:this={wrapperRef}
	class="text-pretty [--gap:--spacing(4)] [--inner-radius:calc(var(--radius)-var(--gap))] [--radius:var(--radius-3xl)]"
	style="height: calc(100vh * {testimonials.length});"
>
	<div class="section-py section-px sticky top-0 flex min-h-screen w-full items-center">
		<div
			class="flex w-full gap-(--card-gap) overflow-x-visible [--card-gap:--spacing(6)]"
			style:padding-left="{containerOffset}px"
		>
			{#each testimonials as testimonial, i}
				<article
					class="lg:container-xs items-between grid aspect-video max-h-[60ch] max-w-full min-w-[50%] snap-start grid-cols-1 gap-8 rounded-(--radius) bg-gray-50 p-(--gap) transition duration-500 ease-out md:grid-cols-[2fr_3fr] dark:bg-gray-900 dark:text-white"
					style:transform="translateX(calc(-{scrollProgress * (testimonials.length - 1) * 100}% -
					var(--card-gap) * {scrollProgress * (testimonials.length - 1)}))"
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
						<q class="text-title2 text-emphasis-high max-w-prose dark:text-white"
							>{testimonial.quote}</q
						>
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
								<p class="text-callout dark:text-gray-200">{testimonial.name}</p>
								<p class="text-emphasis-low dark:text-gray-400">
									{testimonial.position}, {testimonial.company}
								</p>
							</div>
						</cite>
					</div>
				</article>
			{/each}
		</div>

		<!-- Pagination Indicators -->
		<div class="absolute bottom-8 left-1/2 flex -translate-x-1/2 justify-center gap-2">
			{#each testimonials as _, index}
				<div
					class="focus:ring-primary-500 bg-emphasis-dim size-1.5 rounded-full transition-all duration-300 ease-in-out dark:bg-gray-700"
					class:opacity-50={current !== index}
					class:w-8={current === index}
					class:dark:bg-gray-400={current === index}
					aria-hidden="true"
				></div>
			{/each}
		</div>
	</div>
</section>
