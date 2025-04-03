<!--
@component AboutTeaser
A minimalist teaser for the about page.
-->
<script lang="ts">
	// Types
	type TeamMember = {
		name: string;
		role: string;
		image: string;
	};

	// Components
	import Button from "../ui/Button.svelte";

	// Utils
	import { onMount } from "svelte";

	// State
	let isInView = $state(false);
	let sectionRef: HTMLElement;

	// Data
	const teamMember: TeamMember = {
		name: "Alex Morgan",
		role: "Founder & CEO",
		image:
			"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
	};

	// Check if element is in viewport
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					isInView = true;
				}
			},
			{ threshold: 0.2 }
		);

		if (sectionRef) {
			observer.observe(sectionRef);
		}

		return () => {
			if (sectionRef) observer.unobserve(sectionRef);
		};
	});
</script>

<section bind:this={sectionRef} class="bg-white dark:bg-gray-950">
	<div class="section-px section-py container mx-auto">
		<div
			class="relative grid gap-16 lg:grid-cols-2"
			style="opacity: {isInView ? 1 : 0}; transition: opacity 0.8s ease-out;"
		>
			<!-- Left Column: Message -->
			<div class="relative flex max-w-xl flex-col justify-between">
				<div class="">
					<!-- Heading Section -->
					<h2 class="text-title1 mb-[1em]">
						<span>We're building the future of digital experiences</span>
					</h2>

					<!-- Description Section -->
					<div class="space-y-6">
						<p class="text-body text-emphasis-medium">
							Founded in 2018, we're dedicated to creating technology that truly serves humanity.
							Our mission extends beyond innovative products to ethical practices and accessibility
							for all.
						</p>
					</div>
				</div>

				<!-- Team Member & CTA Section -->
				<div
					class="mt-12 flex items-center gap-8 border-t border-gray-100 pt-8 dark:border-gray-800"
				>
					<div class="flex items-center gap-4">
						<img
							src={teamMember.image}
							alt={teamMember.name}
							class="size-12 rounded-full object-cover"
						/>
						<div>
							<div class="text-callout">{teamMember.name}</div>
							<div class="text-caption text-emphasis-low">{teamMember.role}</div>
						</div>
					</div>

					<Button href="/about" variant="secondary" class="ml-auto">Our Story</Button>
				</div>
			</div>

			<!-- Right Column: Image -->
			<div class="relative overflow-hidden rounded-lg">
				<img
					src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2574&auto=format&fit=crop"
					alt="Sleek modern office"
					class="aspect-video w-full object-cover"
				/>
			</div>
		</div>
	</div>
</section>
