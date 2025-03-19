<script lang="ts">
	// import { Zap, Shield, Palette, BarChart, Clock, Cloud } from 'lucide-svelte'
	//
	import Zap from '~icons/lucide/zap'
	import Shield from '~icons/lucide/shield'
	import Palette from '~icons/lucide/palette'
	import BarChart from '~icons/lucide/bar-chart'
	import Clock from '~icons/lucide/clock'
	import Cloud from '~icons/lucide/cloud'

	// Types
	interface Feature {
		icon: typeof Zap
		title: string
		description: string
	}

	// Constants
	const features: Feature[] = [
		{
			icon: Zap,
			title: 'Lightning Fast',
			description: 'Experience unparalleled performance optimized for speed and efficiency.'
		},
		{
			icon: Shield,
			title: 'Secure by Design',
			description: 'Built with security as a foundation, not an afterthought.'
		},
		{
			icon: Palette,
			title: 'Customizable',
			description: 'Adapt the interface and workflows to match your exact requirements.'
		},
		{
			icon: BarChart,
			title: 'Data-Driven',
			description: 'Make informed decisions with comprehensive analytics and insights.'
		},
		{
			icon: Clock,
			title: 'Time-Saving',
			description: 'Automate repetitive tasks and focus on what truly matters to your business.'
		},
		{
			icon: Cloud,
			title: 'Cloud-Native',
			description: 'Access your work from anywhere with seamless cloud integration.'
		}
	]
</script>

<div class="bg-gray-50" data-enter-container>
	<section class="px container mx-auto py-32 md:py-40">
		<div class="grid gap-16">
			<div class="max-w-2xl">
				<h2 class="text-title2 mb-[1em]" data-enter>Essential Capabilities</h2>
				<p class="text-body leading-relaxed text-gray-700" data-enter>
					Meticulously crafted with intention—each feature designed to elevate your workflow with
					precision and elegance.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
				{#each features as feature}
					<div
						class="group pl flex w-full flex-col gap-0 border-0 border-l border-gray-100 transition-all"
						data-enter
					>
						<feature.icon class="text-primary-700 h-6 w-6 opacity-75" />

						<h3 class="text-headline mt-[2em] mb-[1em] font-medium">{feature.title}</h3>
						<p class="text-body text-gray-600">
							{feature.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
