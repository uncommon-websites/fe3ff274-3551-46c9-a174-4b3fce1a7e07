<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
<<<<<<< HEAD
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
=======
>>>>>>> 5093140f2ff4a32bdddde6142006d38e47c75443
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
<<<<<<< HEAD
<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		'https://cdn.brandfetch.io/shopify.com/w/400/h/400/logo',
		'https://cdn.brandfetch.io/hubspot.com/w/400/h/400/logo',
		'https://cdn.brandfetch.io/salesforce.com/w/400/h/400/logo',
		'https://cdn.brandfetch.io/mailchimp.com/w/400/h/400/logo'
	]}
/>
=======
<LogoScroller label="" />
>>>>>>> 5093140f2ff4a32bdddde6142006d38e47c75443

<Summary
	title="What we do"
	text="Our technology delivers measurable results through secure, adaptable solutions that directly increase productivity and drive growth."
/>

<Testimonials
	testimonials={[
		{
			name: "Marcus Thompson",
			position: "CEO",
			company: "Velocity Capital",
			quote:
				"Neptune Studio's conversion optimization increased our lead generation by 340% in just 8 weeks. We went from 12 qualified leads per month to over 50, saving us $180,000 annually on paid advertising while tripling our revenue pipeline.",
			image: "/generated/image-professional-corporate-headshot-of-marcu.webp"
		},
		{
			name: "Elena Rodriguez",
			position: "Marketing Director",
			company: "StreamlineLogistics",
			quote:
				"Their data-driven redesign eliminated our 6-month sales cycle bottleneck. We reduced customer acquisition time by 60% and increased conversion rates from 2.3% to 8.1%, directly contributing to our $2.4M revenue growth this quarter.",
			image: "/generated/image-professional-corporate-headshot-of-elena.webp"
		},
		{
			name: "James Chen",
			position: "Founder",
			company: "TechScale Solutions",
			quote:
				"Neptune Studio's conversion framework saved us from a costly rebrand. Instead of spending $400K on external agencies, their optimization increased our closing rate by 285% while preserving our existing brand equity and customer relationships.",
			image: "/generated/image-professional-corporate-headshot-of-james.webp"
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
<CallToAction 
	title="Stop losing revenue to poor-converting websites"
	subtitle="Your next high-converting website is just one conversation away"
	description="Join 500+ enterprise brands who've transformed their websites into revenue-generating assets. Our satisfaction guarantee means zero risk—and our proven frameworks deliver an average 340% increase in conversions within 8 weeks."
	imageSrc="/generated/image-photorealistic-candid-editorial-photo-of.webp"
	callsToAction={[
		{
			href: "/contact",
			label: "Get your conversion audit",
			variant: "primary"
		},
		{
			href: "/portfolio",
			label: "View 50+ case studies",
			variant: "secondary"
		}
	]}
/>
