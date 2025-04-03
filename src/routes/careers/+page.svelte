<script lang="ts">
	// Types
	import type { ComponentType } from "svelte";

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconArrowRight from "~icons/lucide/arrow-right";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
		{
			title: "Flexible Work",
			description: "Remote-first with flexible hours that respect work-life balance.",
			icon: IconBriefcase
		},
		{
			title: "Growth Opportunities",
			description: "Continuous learning with mentorship and education stipends.",
			icon: IconUsers
		},
		{
			title: "Comprehensive Benefits",
			description: "Health coverage, retirement plans, and generous paid time off.",
			icon: IconHeart
		}
	];

	const openings = [
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time"
		},
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time"
		},
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time"
		},
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time"
		}
	];

	const employeeTestimonials = [
		{
			name: "Michael Chen",
			position: "Senior Developer",
			company: "Engineering Team",
			quote:
				"Working here has given me the opportunity to tackle challenging problems while maintaining a healthy work-life balance. The team culture is supportive and collaborative.",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		},
		{
			name: "Priya Sharma",
			position: "Product Designer",
			company: "Design Team",
			quote:
				"The creative freedom and opportunity to influence product decisions makes this the best place I've ever worked. I'm constantly learning and growing.",
			image:
				"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		},
		{
			name: "Marcus Johnson",
			position: "Marketing Lead",
			company: "Marketing Team",
			quote:
				"I joined three years ago and have grown tremendously. The leadership truly invests in your development and the work environment is both challenging and supportive.",
			image:
				"https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		}
	];

	const processSteps = [
		{
			step: 1,
			title: "Apply",
			description:
				"Submit your application through our careers portal with your resume and portfolio."
		},
		{
			step: 2,
			title: "Interview",
			description: "Meet with our team to discuss your experience, skills, and career aspirations."
		},
		{
			step: 3,
			title: "Welcome aboard",
			description: "Join our team and start your journey building the future with us."
		}
	];
</script>

<!-- Hero Section -->
<section class="bg-gray-50 dark:bg-gray-900">
	<div class="section-py section-px container mx-auto grid gap-16 md:grid-cols-2 md:items-center">
		<h1 class="text-display text-emphasis-high">
			<AnimateText text="Join our team of innovators" />
		</h1>
		<p class="text-headline text-emphasis-low max-w-xl">
			We're looking for passionate people to help us build the future of digital experiences.
			Discover your next opportunity with us.
		</p>
	</div>
</section>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Build your career while making an impact" />

	<div class="mt-16 grid gap-8 md:grid-cols-3">
		{#each benefits as benefit}
			<div class="flex flex-col gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-800">
				<div class="{ICON_CONTAINER_CLASSES} h-12 w-12">
					<svelte:component this={benefit.icon} class="h-6 w-6" />
				</div>
				<h3 class="text-title3">{benefit.title}</h3>
				<p class="text-body text-emphasis-low">{benefit.description}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Culture Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-py section-px container mx-auto grid gap-12 md:grid-cols-2 md:items-center">
		<div>
			<h2 class="text-title1 mb-6">Our culture</h2>
			<p class="text-body mb-6">
				We cultivate an environment where creativity thrives, ideas are valued, and everyone has a
				voice. Our collaborative approach allows team members to grow personally and professionally.
			</p>
			<p class="text-body">
				We celebrate diversity, prioritize work-life balance, and believe that the best innovations
				come from happy, engaged teams working towards a shared vision.
			</p>
		</div>
		<div class="h-full w-full overflow-hidden rounded-2xl">
			<img
				src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
				alt="Our team collaborating"
				class="h-full w-full object-cover"
			/>
		</div>
	</div>
</section>

<!-- Employee Testimonials Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader
		title="Hear from our team"
		subtitle="What our employees have to say about working here"
	/>
</section>
<Testimonials testimonials={employeeTestimonials} />
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div
		class="section-px section-py container mx-auto grid grid-cols-2 place-content-start items-start"
	>
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<div class="mt-16 grid gap-6">
			{#each openings as opening}
				<div
					class="grid grid-cols-2 place-content-between justify-between rounded-xl bg-white p-6 transition-all hover:shadow-sm md:grid-cols-[1fr_auto] md:items-center md:gap-4 dark:bg-gray-800"
				>
					<div>
						<h3 class="text-headline">{opening.title}</h3>
						<p class="text-callout text-emphasis-low mt-2">
							{opening.department} · {opening.location} · {opening.type}
						</p>
					</div>

					<Button
						href="/careers/{opening.title.toLowerCase().replace(/\s+/g, '-')}"
						variant="secondary"
						class="ml-auto"
						suffix={IconArrowRight}
					>
						View position
					</Button>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 h-14 w-14">
						<span class="text-title3 font-bold">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<CallToAction
	title="Don't see the right fit?"
	subtitle="We're always looking for talent"
	description="Send us your resume and we'll keep you in mind for future opportunities that match your skills and interests."
	href="mailto:careers@example.com"
/>
