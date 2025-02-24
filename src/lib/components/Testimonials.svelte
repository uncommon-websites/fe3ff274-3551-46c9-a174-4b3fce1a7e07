<script lang="ts">
	import { onMount } from 'svelte'
	import { cubicInOut, cubicOut } from 'svelte/easing'
	import { blur, fade, fly, scale } from 'svelte/transition'

	// Types
	type Testimonial = {
		quote: string
		cite: string
		src: string
	}

	// Props
	const {
		testimonials = []
	}: {
		testimonials: Testimonial[]
	} = $props()

	// State
	const INTERVAL = 3000
	let current = $state(-1)
	let isCiteVisible = $state(false)

	onMount(increment)

	function increment() {
		isCiteVisible = false
		current = (current + 1) % testimonials.length
	}
</script>

<div
	class="mx-auto grid aspect-video w-full place-items-center overflow-hidden bg-gray-100 dark:bg-gray-900"
>
	{#each testimonials as testimonial, index}
		{#if index === current}
			<div
				class="grid-center testimonial grid size-full bg-cover bg-no-repeat"
				transition:fade={{ easing: cubicInOut, duration: 500 }}
			>
				<img
					src={testimonial.src}
					alt=""
					class=" col-span-full row-span-full size-full place-self-stretch object-cover"
				/>
				<div
					class="col-span-full row-span-full grid h-full origin-center content-end lg:container lg:mx-auto lg:content-center lg:items-center lg:justify-end"
				>
					<blockquote
						class="p lg:m relative grid h-full w-full gap-2 lg:max-w-[65ch] lg:rounded-md"
					>
						<div class="mask absolute -inset-[100px] bg-gray-950 mix-blend-overlay"></div>
						<p class="title-3 z-10 min-h-[6ch] !font-medium">
							{#each testimonial.quote.split(' ') as word, i}
								{@const words = testimonial.quote.split(' ')}
								<span
									in:blur|global={{ duration: 2000, easing: cubicOut, delay: i * 50 + 1000 }}
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
						<div class="z-10 grid h-[2ch]">
							<cite
								class={[
									'text-emphasis-medium grid-center h-[2ch] transition ease-out',
									isCiteVisible ? 'visible opacity-100' : 'invisible opacity-0'
								]}
								ontransitionend={() => {
									if (isCiteVisible) {
										setTimeout(() => {
											increment()
										}, INTERVAL)
									}
								}}
							>
								— {testimonial.cite}
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
</style>
