<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<CustomerCardHero
	centered={true}
	title="Transform websites into 24/7 revenue machines"
	subtitle="Join 500+ enterprise brands who increased conversions by 3x with our proven design frameworks and data-driven optimization."
	customers={[
		{
			name: "Maya Johnson",
			position: "CEO, TechVenture Solutions",
			imageSrc: "/generated/image-editorial-corporate-portrait-of-a-profes.webp"
		},
		{
			name: "Arjun Patel", 
			position: "Founder, ScaleWorks",
			imageSrc: "/generated/image-editorial-corporate-portrait-of-a-confid.webp"
		},
		{
			name: "Sofia Rodriguez",
			position: "Marketing Director, GrowthCorp",
			imageSrc: "/generated/image-editorial-corporate-portrait-of-a-market.webp"
		},
		{
			name: "David Mitchell",
			position: "CEO, ProMax Industries",
			imageSrc: "/generated/image-editorial-corporate-portrait-of-a-succes.webp"
		},
		{
			name: "Helen Chen",
			position: "VP Marketing, InnovateNow",
			imageSrc: "/generated/image-editorial-corporate-portrait-of-a-female.webp"
		}
	]}
/>
<LogoScroller label="" />

<Summary
	title="What we do"
	text="Our technology delivers measurable results through secure, adaptable solutions that directly increase productivity and drive growth."
/>

<Testimonials
	testimonials={[
		{
			name: "Jane Smith",
			position: "CTO",
			company: "Tech Innovations",
			quote:
				"Their cutting-edge automation boosted our productivity by 35%.\nThe intuitive interface reduced training time and improved team adoption.",
			image: "https://www.unc.mn/image-placeholder.svg"
		},
		{
			name: "John Doe",
			position: "Director of Operations",
			company: "Global Solutions",
			quote:
				"Their robust security protocols gave us confidence in handling sensitive data.\nThe 24/7 support team resolved issues within hours, not days.",
			image: "https://www.unc.mn/image-placeholder.svg"
		},
		{
			name: "Sarah Johnson",
			position: "Product Manager",
			company: "Future Systems",
			quote:
				"The scalable platform grew seamlessly with our business needs.\nTheir customization options allowed us to tailor solutions perfectly to our workflows.",
			image: "https://www.unc.mn/image-placeholder.svg"
		}
	]}
/>

<Features
	title="Features"
	subtitle="Some features"
	features={[
		{
			title: "Streamlined Workflows",
			description:
				"Automate repetitive tasks and connect systems to improve productivity with our industry-leading 87% time savings."
		},
		{
			title: "Data Analysis",
			description:
				"Extract meaningful insights from your data with powerful analytical tools backed by proprietary AI algorithms that are 3x more accurate than competitors."
		},
		{
			title: "Secure Collaboration",
			description:
				"Work together seamlessly while maintaining strict data privacy standards with our zero-knowledge architecture and military-grade encryption."
		}
	]}
/>
<AboutTeaser />
<CallToAction />
