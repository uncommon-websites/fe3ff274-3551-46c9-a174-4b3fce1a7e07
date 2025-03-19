<script lang="ts">
	// Types
	type UseCase = {
		title: string;
		description: string;
		image: string;
		uniqeSellingPoints?: string[];
		link?: {
			href: string;
			label: string;
		};
	};

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import AnimateText from "../animation/AnimateText.svelte";

	// Props
	const { title, subtitle, useCases }: { title: string; subtitle: string; useCases: UseCase[] } =
		$props();
</script>

<section class="">
	<div class="section-px container mx-auto grid">
		<div class="section-py text-title2 container-xs grid text-balance">
			<h2>
				<AnimateText text={title} />
			</h2>
			<p class="text-emphasis-low">
				<AnimateText text={subtitle} />
			</p>
		</div>

		<div class="p grid grid-cols-2 gap-16 bg-gray-50">
			<!-- Left column: Use cases list -->
			<div class="rounded-2xl bg-gray-50">
				{#if useCases[0]?.image}
					<div>
						<img src={useCases[0].image} alt="Featured use case" loading="lazy" />
					</div>
				{/if}
			</div>

			<div class="grid gap-16">
				{#each useCases as useCase}
					<article>
						<h3 class="text-headline">{useCase.title}</h3>

						{#each useCase.uniqueSellingPoints as usp, i}
							<li>{usp}</li>
						{/each}

						<p class="text-body text-emphasis-medium">{useCase.description}</p>
						{#if useCase.link}
							<Button size="sm" href={useCase.link.href} variant="secondary" class="mt-4">
								{useCase.link.label}
							</Button>
						{/if}
					</article>
				{/each}
			</div>

			<!-- Right column: Featured image -->
		</div>
	</div>
</section>
