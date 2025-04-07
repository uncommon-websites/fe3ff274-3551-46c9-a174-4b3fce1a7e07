<script lang="ts">
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Button from "$lib/components/ui/Button.svelte";
	import { animate, stagger } from "motion";
	import { onMount } from "svelte";

	// Types
	type TeamMember = {
		name: string;
		position: string;
		bio: string;
		image: string;
	};

	// Props
	const {
		title = "Our team.",
		subtitle = "Your partners in innovation.",
		teamMembers = [
			{
				name: "Alex Morgan",
				position: "Founder & CEO",
				bio: "Started the company with a vision to transform the industry through innovative solutions.",
				image:
					"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
			},
			{
				name: "Jamie Chen",
				position: "Chief Design Officer",
				bio: "Award-winning designer with a passion for creating intuitive and beautiful experiences.",
				image:
					"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
			},
			{
				name: "Taylor Wright",
				position: "Head of Engineering",
				bio: "Technology enthusiast focused on building scalable systems that make a difference.",
				image:
					"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
			}
		]
	}: {
		teamMembers?: TeamMember[];
		title?: string;
		subtitle?: string;
	} = $props();

	let cards: HTMLElement[] = $state([]);

	onMount(() => {
		animate(
			cards,
			{
				y: ["1.5rem", 0],
				filter: ["blur(2px)", "blur(0px)"],
				opacity: [0, 1]
			},
			{
				duration: 0.3,
				ease: "easeOut",
				delay: stagger(0.1, {
					ease: "easeInOut"
				})
			}
		);
	});
</script>

<section class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
	<div
		class="section-py section-px container mx-auto [--gap:--spacing(4)] [--radius:var(--radius-2xl)]"
	>
		<SectionHeader {title} {subtitle} />

		<div
			class="grid gap-(--gap)"
			style:grid-template-columns="repeat(auto-fit, minmax(200px, 1fr))"
		>
			{#snippet card(
				{
					name,
					position,
					image,
					type = "team"
				}: {
					name: string;
					position: string;
					image: string;
					type?: "team" | "join";
				},
				index: number
			)}
				<div
					bind:this={cards[index]}
					class={[
						"card opacity-0",
						"relative isolate grid aspect-[4/5] content-end items-end gap-10 overflow-hidden rounded-(--radius)  bg-cover p-(--gap) [--inner-radius:calc(var(--radius)-var(--gap))] ",
						type === "join" ? "bg-primary-400" : ""
					]}
					style={type === "join" ? "" : `background-image: url('${image}')`}
				>
					{#if type === "team"}
						<div
							class="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30"
						>
							<div class="linear-blur-down absolute right-0 bottom-0 left-0 h-[25%]"></div>
						</div>
					{/if}

					<div class="text-caption z-10 text-white">
						<div class={type === "join" ? "grid grid-cols-2 items-center" : ""}>
							<div>
								<div>{name}</div>
								<div class="opacity-70">{position}</div>
							</div>
							{#if type === "join"}
								<div class="justify-self-end">
									<Button href="/careers" variant="secondary" size="sm">Join us</Button>
								</div>
							{/if}
						</div>
					</div>

					<!-- <div class="aspect-[4/5] size-full overflow-hidden rounded-(--inner-radius)">
						{#if type === "team"}
							<img src={image} alt={`${name}`} loading="lazy" class="size-full object-cover" />
						{:else}
							<a
								class="grid size-full place-items-center bg-gray-100 transition-colors duration-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
								href="/careers"
							>
								<IconPlus class="size-12 text-gray-500 dark:text-gray-400" />
							</a>
						{/if}
					</div> -->
				</div>
			{/snippet}
			{#each teamMembers as member, index}
				{@render card(member, index)}
			{/each}

			{@render card(
				{
					name: "You?",
					position: "Join us",
					type: "join"
				},
				teamMembers.length
			)}
		</div>
	</div>
</section>
