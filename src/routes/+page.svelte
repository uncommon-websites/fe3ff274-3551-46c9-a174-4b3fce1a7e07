<script lang="ts">
	// Types
	import type { PageProps } from './$types'

	// Components
	import Button from '$lib/components/ui/Button.svelte'
	import Hero from '$lib/components/layout/Hero.svelte'
	import ValueProp from '$lib/components/layout/ValueProp.svelte'
	import FeaturesOne from '$lib/components/layout/FeaturesOne.svelte'
	import Stats from '$lib/components/layout/Stats.svelte'
	import UseCases from '$lib/components/layout/UseCases.svelte'
	import Summary from '$lib/components/layout/Summary.svelte'

	// Props
	const { data }: PageProps = $props()
</script>

<Hero />
<Summary
	text="We believe in creating technology that empowers people to achieve more while respecting their privacy and security. Our platform is built on principles of transparency, accessibility, and continuous innovation to meet evolving needs. We're committed to sustainable development practices that benefit both our users and the environment."
/>
<ValueProp
	title="Our Mission"
	content="We believe in creating technology that empowers people to achieve more while respecting their privacy and security. Our platform is built on principles of transparency, accessibility, and continuous innovation to meet evolving needs. We're committed to sustainable development practices that benefit both our users and the environment."
/>
<FeaturesOne />
<UseCases
	title="Our Use Cases"
	subtitle="Explore how our platform can be used in various scenarios."
	useCases={[
		{
			title: 'Remote Healthcare',
			description:
				'Connect with licensed physicians for virtual consultations, prescriptions, and follow-ups from the comfort of your home.',
			image: '/images/remote-healthcare.webp',
			link: {
				href: '/healthcare',
				label: 'Learn about telehealth'
			}
		},
		{
			title: 'Personal Training',
			description:
				'Get personalized workout plans and real-time coaching from certified fitness experts, no matter where you are.',
			image: '/images/personal-training.webp',
			link: {
				href: '/fitness',
				label: 'Meet our trainers'
			}
		},
		{
			title: 'Celebrity Masterclasses',
			description:
				'Learn directly from industry leaders and celebrities through interactive online sessions and exclusive content.',
			image: '/images/masterclass.webp',
			link: {
				href: '/masterclass',
				label: 'Browse classes'
			}
		}
	]}
/>
<Stats />
