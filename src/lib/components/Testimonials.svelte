<script lang="ts">
	// Types
	type Testimonial = {
		quote: string
		cite: string
		src: string
	}

	// Utils
	import { onMount } from 'svelte'
	import { cubicInOut, cubicOut } from 'svelte/easing'
	import { blur, fade } from 'svelte/transition'

	// Props
	const {
		testimonials = []
	}: {
		testimonials: Testimonial[]
	} = $props()

	// State
	const INTERVAL = 3000
	const DURATION = 2000

	let current = $state(0)
	let isCiteVisible = $state(false)

	onMount(increment)

	function increment() {
		isCiteVisible = false
		current = (current + 1) % testimonials.length
	}
</script>

<!-- <div class="p mx-auto grid aspect-video h-full w-full place-items-center overflow-hidden"> -->
<div class="px pb mx-auto grid h-full max-h-full w-full place-items-center overflow-hidden">
	{#each testimonials as testimonial, index}
		{#if index === current}
			<div class="grid-center testimonial grid size-full overflow-clip bg-cover bg-no-repeat">
				<img
					src={testimonial.src}
					alt=""
					out:fade|global={{ easing: cubicOut, duration: DURATION }}
					in:fade|global={{ easing: cubicOut, duration: DURATION, delay: 500 }}
					class="col-span-full row-span-full aspect-video size-full max-h-full place-self-stretch object-cover"
				/>

				<div
					class="col-span-full row-span-full grid h-full origin-center content-end lg:container lg:mx-auto lg:content-center lg:items-center lg:justify-end"
				>
					<blockquote
						class="p lg:m relative grid h-full w-full gap-2 text-white lg:max-w-[65ch] lg:rounded-md"
						out:blur|global={{ duration: 1000, easing: cubicOut }}
					>
						<div
							class="mask mix-blend-color- absolute -inset-[100px] bg-gray-950 mix-blend-overlay"
							in:fade|global={{ easing: cubicInOut, duration: 1000, delay: 500 }}
						></div>
						<p class="title-3 z-20 !font-medium text-pretty">
							{#each testimonial.quote.split(' ') as word, i}
								{@const words = testimonial.quote.split(' ')}
								<span
									in:blur|global={{
										duration: 1500,
										easing: cubicOut,
										delay: i * 100 + 1000,
										amount: 10
									}}
									onintroend={() => {
										if (i === words.length - 1) {
											isCiteVisible = true
										}
									}}
								>
									{word}
									{i < words.length - 1 ? ' ' : ''}
								</span>
							{/each}
						</p>
						<div class="z-10 mt-1 grid h-[2ch]">
							<cite
								class={[
									'grid-center block h-[2ch] text-white/60 not-italic transition duration-500 ease-out',
									isCiteVisible ? ' opacity-100' : ' translate-y-2 opacity-0'
								]}
								ontransitionend={() => {
									if (isCiteVisible) {
										setTimeout(() => {
											increment()
										}, INTERVAL)
									}
								}}
							>
								{testimonial.cite}
							</cite>
						</div>
					</blockquote>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style lang="postcss">
	blockquote .mask {
		mask: linear-gradient(to bottom, transparent 0%, black 100%);
		backdrop-filter: blur(8px);

		@media (width >= 64rem) {
			mask: radial-gradient(ellipse farthest-side at center, black 0%, transparent 100%);
			backdrop-filter: blur(8px);
		}
	}

	img {
		animation: slowScale 10s linear forwards;
	}

	@keyframes slowScale {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.1);
		}
	}
</style>
