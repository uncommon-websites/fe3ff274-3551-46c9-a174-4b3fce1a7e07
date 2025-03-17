<script lang="ts">
	// Types
	import type { PageProps } from './$types'

	// Components
	import Button from '$lib/components/ui/Button.svelte'
	import Hero from '$lib/components/layout/Hero.svelte'
	import ValueProp from '$lib/components/layout/ValueProp.svelte'
	import Features from '$lib/components/layout/Features.svelte'
	import Stats from '$lib/components/layout/Stats.svelte'

	// Props
	const { data }: PageProps = $props()
</script>

<Hero />
<ValueProp
	title="Our Mission"
	content="We believe in creating technology that empowers people to achieve more while respecting their privacy and security. Our platform is built on principles of transparency, accessibility, and continuous innovation to meet evolving needs. We're committed to sustainable development practices that benefit both our users and the environment."
/>
<Features />

<Stats />
