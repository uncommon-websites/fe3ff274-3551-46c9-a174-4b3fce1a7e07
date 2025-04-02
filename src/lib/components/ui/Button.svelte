<script lang="ts">
	// Types
	import type { Snippet } from "svelte";
	import type { ButtonRootProps } from "bits-ui";
	import { Button } from "bits-ui";

	type Variant = "primary" | "secondary" | "ghost";
	type Size = "sm" | "md" | "lg";

	type Props = ButtonRootProps & {
		variant?: Variant;
		size?: Size;
		children: Snippet;
		iconOnly?: boolean;
		hideLabel?: boolean;
		rounded?: boolean;
		prefix?: Snippet;
		suffix?: Snippet;
	};

	// Props
	const {
		variant = "primary",
		size = "md",
		children,
		class: classes = "",
		prefix,
		suffix,
		iconOnly = false,
		hideLabel = false,
		rounded = true,
		...rest
	}: Props = $props();

	// Styles
	const variants: Record<Variant, string> = {
		primary:
			"bg-primary-800 text-white hover:bg-primary-900 dark:bg-primary-700 dark:text-white dark:hover:bg-primary-800",
		secondary:
			"bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700",
		ghost:
			"bg-transparent text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
	};

	const sizes: Record<Size, string> = $derived({
		sm: iconOnly ? "p-1.5 text-sm" : "px-3 py-1.5 text-sm",
		md: iconOnly ? "p-2 text-base" : "px-4.5 py-2 text-base",
		lg: iconOnly ? "p-3 text-lg" : "px-6 py-2.5 text-lg"
	});

	const baseStyles =
		"inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none focus:ring-0 active:brightness-[.9] active:scale-[.98] ring-0 focus-visible:ring-primary-500/20 dark:focus-visible:ring-primary-400/30 gap-3 [touch-action:manipulation]";

	let Prefix = $derived(prefix);
	let Suffix = $derived(suffix);
</script>

<Button.Root
	{...rest}
	class={[
		baseStyles,
		variants[variant],
		iconOnly && "aspect-square",
		sizes[size],
		rounded ? "!rounded-full" : "",
		"gap-2",
		classes
	]}
	data-theme-mode="auto"
>
	{#if prefix}
		<Prefix />
	{/if}
	<span class:sr-only={hideLabel || iconOnly}>
		{@render children?.()}
	</span>
	{#if suffix}
		<Suffix />
	{/if}
</Button.Root>
