<script lang="ts">
	// Types
	import type { ComponentProps } from "svelte";

	// Components
	import Button from "../ui/Button.svelte";
	import AnimateText from "../animation/AnimateText.svelte";

	// Types
	type CTA = {
		href: string;
		label: string;
		variant?: ComponentProps<typeof Button>["variant"];
	};

	// Props
	const {
		title = "Get started today",
		subtitle = "Join now",
		description = "Ready to experience the difference? Join our community of satisfied customers and see how our solution can transform your workflow. ",
		callsToAction = [
			{
				href: "/get-started",
				label: "Get Started",
				variant: "primary"
			},
			{
				href: "/get-started",
				label: "Talk to Sales",
				variant: "secondary"
			}
		]
	}: {
		title: string;
		subtitle: string;
		description: string;
		callsToAction: CTA[];
	} = $props();
</script>

<div class="bg-gray-100">
	<section class="section-px section-py container mx-auto">
		<div
			class="grid aspect-[2/1] content-start items-center justify-between gap-(--gap) rounded-(--radius) bg-white p-(--gap) text-balance [--gap:--spacing(8)] [--inner-radius:calc(var(--radius)-var(--gap))] [--radius:var(--radius-3xl)] lg:grid-cols-[2fr_1fr]"
		>
			<div class="items-between grid h-full content-between gap-16">
				<h2 class="text-title2 mb-3 flex flex-col">
					<span><AnimateText text={title} /></span>
					<span class="text-emphasis-low"><AnimateText text={subtitle} /></span>
				</h2>
				<div class="flex flex-col items-start justify-start gap-4">
					<p class="text-headline text-emphasis-low">
						{description}
					</p>
					<div class="flex gap-2">
						{#each callsToAction as cta}
							<Button href={cta.href} variant={cta.variant || "primary"}>{cta.label}</Button>
						{/each}
					</div>
				</div>
			</div>
			<img
				src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
				alt="Visual comparison showing product benefits"
				class=" hidden h-full max-h-full w-full rounded-[calc(max(var(--inner-radius),.25rem))] object-cover lg:block"
			/>
		</div>
	</section>
</div>
