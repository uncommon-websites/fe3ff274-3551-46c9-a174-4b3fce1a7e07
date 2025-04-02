<script lang="ts">
	// Components
	import { METADATA } from "$lib/content";
</script>

<svelte:head>
	<title>Privacy Policy | {METADATA.companyName}</title>
	<meta name="description" content="Privacy policy for {METADATA.companyName}" />
</svelte:head>
<main class="section-px section-py container mx-auto max-w-prose">
	<div class="mx-auto max-w-3xl">
		<h1 class="text-title1 mb-12">Privacy Policy</h1>

		<p class="text-body mb-8">
			Last updated: {new Date().toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric"
			})}
		</p>

		<section class="mb-16">
			<h2 class="text-title3 mb-6">Introduction</h2>
			<p class="text-body">
				At {METADATA.companyName}, we respect your privacy and are committed to protecting your
				personal data. This privacy policy will inform you about how we look after your personal
				data when you visit our website and tell you about your privacy rights and how the law
				protects you.
			</p>
		</section>

		<section class="mb-16">
			<h2 class="text-title3 mb-6">Information We Collect</h2>
			<p class="text-body mb-6">
				We may collect, use, store and transfer different kinds of personal data about you which we
				have grouped together as follows:
			</p>
			<ul class="text-body list-disc space-y-3 pl-8">
				<li>Identity Data includes first name, last name, username or similar identifier.</li>
				<li>Contact Data includes email address and telephone numbers.</li>
				<li>
					Technical Data includes internet protocol (IP) address, browser type and version, time
					zone setting and location, browser plug-in types and versions, operating system and
					platform, and other technology on the devices you use to access this website.
				</li>
				<li>
					Usage Data includes information about how you use our website, products and services.
				</li>
			</ul>
		</section>

		<section class="mb-16">
			<h2 class="text-title3 mb-6">How We Use Your Information</h2>
			<p class="text-body mb-6">
				We will only use your personal data when the law allows us to. Most commonly, we will use
				your personal data in the following circumstances:
			</p>
			<ul class="text-body list-disc space-y-3 pl-8">
				<li>
					Where we need to perform the contract we are about to enter into or have entered into with
					you.
				</li>
				<li>
					Where it is necessary for our legitimate interests (or those of a third party) and your
					interests and fundamental rights do not override those interests.
				</li>
				<li>Where we need to comply with a legal obligation.</li>
			</ul>
		</section>

		<section class="mb-16">
			<h2 class="text-title3 mb-6">Data Security</h2>
			<p class="text-body">
				We have put in place appropriate security measures to prevent your personal data from being
				accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In
				addition, we limit access to your personal data to those employees, agents, contractors and
				other third parties who have a business need to know.
			</p>
		</section>

		<section class="mb-16">
			<h2 class="text-title3 mb-6">Your Legal Rights</h2>
			<p class="text-body mb-6">
				Under certain circumstances, you have rights under data protection laws in relation to your
				personal data, including the right to:
			</p>
			<ul class="text-body list-disc space-y-3 pl-8">
				<li>Request access to your personal data.</li>
				<li>Request correction of your personal data.</li>
				<li>Request erasure of your personal data.</li>
				<li>Object to processing of your personal data.</li>
				<li>Request restriction of processing your personal data.</li>
				<li>Request transfer of your personal data.</li>
			</ul>
		</section>

		<section>
			<h2 class="text-title3 mb-6">Contact Us</h2>
			<p class="text-body">
				If you have any questions about this privacy policy or our privacy practices, please contact
				us at <a href="mailto:privacy@example.com" class="text-primary-600 hover:underline"
					>privacy@example.com</a
				>.
			</p>
		</section>
	</div>
</main>
