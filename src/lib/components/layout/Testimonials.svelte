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
	let carouselRef: HTMLElement;
	let maxScrollDistance = $state(0);

	// Utils
	import { onMount } from "svelte";

	onMount(() => {
		// Preload images
		testimonials.forEach((testimonial) => {
			if (testimonial.image) {
				const img = new Image();
				img.loading = "lazy";
				img.src = testimonial.image;
			}
		});

		// Calculate the max scroll distance for translation
		const updateDimensions = () => {
			if (!carouselRef) return;

			// Get all cards and container measurements
			const cards = Array.from(carouselRef.querySelectorAll("article"));
			if (!cards.length) return;

			const lastCard = cards[cards.length - 1];
			const lastCardWidth = lastCard.offsetWidth;

			// Calculate the amount needed to scroll so the last card is fully visible
			// We need the last card's right edge to align with (or be before) the viewport right edge
			const totalWidth = carouselRef.scrollWidth;
			const visibleWidth = window.innerWidth;

			// Get computed styles to account for gaps and padding
			const style = getComputedStyle(carouselRef);
			const gapStr = style.gap || style.columnGap || "0px";
			const gapValue = parseInt(gapStr, 10) || 0;

			// This is where math matters:
			// We need to scroll far enough that the end of the carousel minus one card width
			// is at the left edge of the viewport
			maxScrollDistance = Math.max(0, totalWidth - visibleWidth);

			// Log for debugging
			console.log("Scroll calculations:", {
				totalWidth,
				visibleWidth,
				lastCardWidth,
				gapValue,
				maxScrollDistance
			});

			// Check if calculation seems to be working
			if (maxScrollDistance <= 0) {
				console.warn("maxScrollDistance calculation may be incorrect - no scrolling will occur");
			}
		};

		// Track vertical scroll position and convert to horizontal scroll
		let ticking = false;
		let lastScrollY = window.scrollY;
		const handleScroll = () => {
			// Skip processing if we're already handling a frame or scroll position hasn't changed enough
			if (ticking || Math.abs(window.scrollY - lastScrollY) < 5) return;

			ticking = true;
			lastScrollY = window.scrollY;

			requestAnimationFrame(() => {
				if (!wrapperRef) return;

				const rect = wrapperRef.getBoundingClientRect();
				const sectionHeight = rect.height;
				const viewportHeight = window.innerHeight;

				// Calculate progress (0-1)
				let progress = 0;
				if (rect.top <= 0) {
					progress = Math.min(Math.abs(rect.top) / (sectionHeight - viewportHeight), 1);
				}

				scrollProgress = progress;
				current = Math.min(Math.floor(progress * testimonials.length), testimonials.length - 1);
				ticking = false;
			});
		};

		// Debounce resize handler for better performance
		let resizeTimer: number;
		const handleResize = () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(updateDimensions, 100);
		};

		// Initialize and set up listeners
		updateDimensions();
		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);
		setTimeout(() => {
			updateDimensions(); // Run once more after DOM is settled
			handleScroll();
		}, 100);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(resizeTimer);
		};
	});
</script>

<section
	bind:this={wrapperRef}
	class="text-pretty [--gap:--spacing(4)] [--inner-radius:calc(var(--radius)-var(--gap))] [--radius:var(--radius-3xl)]"
	style="height: calc(100vh * {testimonials.length});"
>
	<div
		class="section-py section-px sticky top-0 flex min-h-screen w-full items-center overflow-hidden"
	>
		<div
			bind:this={carouselRef}
			class="flex w-full gap-(--card-gap) pr-8 [--card-gap:--spacing(6)]"
		>
			{#each testimonials as testimonial}
				<article
					class="lg:container-xs items-between grid aspect-video max-h-[60ch] max-w-full min-w-[50%] transform-gpu grid-cols-1 gap-8 rounded-(--radius) bg-gray-50 p-(--gap) transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform contain-layout md:grid-cols-[2fr_3fr] dark:bg-gray-900 dark:text-white"
					style:transform="translateX(calc(-{scrollProgress} * {maxScrollDistance}px))"
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

<style>
	/* Hide scrollbar while preserving functionality */
	.hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>
