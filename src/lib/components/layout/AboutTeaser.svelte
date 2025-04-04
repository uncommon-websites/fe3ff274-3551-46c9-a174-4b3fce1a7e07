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

	// State
	let sectionRef: HTMLElement;

	// Data
	const teamMember: TeamMember = {
		name: "Alex Morgan",
		role: "Founder & CEO",
		image:
			"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
	};
</script>

<section bind:this={sectionRef} class="bg-white dark:bg-gray-950">
	<div class="section-px section-py container mx-auto">
		<div class="relative grid gap-16 lg:grid-cols-2">
			<!-- Left Column: Message -->
			<div class="relative flex max-w-xl flex-col justify-between">
				<div class="">
					<!-- Heading Section -->
					<h2 class="text-title1 mb-[1em]">
						<blockquote>"We're building the future of digital experiences"</blockquote>
					</h2>
				</div>

				<!-- Team Member & CTA Section -->
				<div class="mt-12 flex items-center gap-8 dark:border-gray-800">
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
		</div>
	</div>
</section>
