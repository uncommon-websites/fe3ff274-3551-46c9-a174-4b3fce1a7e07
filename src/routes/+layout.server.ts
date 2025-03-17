// Types
import type { LayoutServerLoad } from './$types'

// Content
import { METADATA } from '$lib/content'

export const load: LayoutServerLoad = async () => {
	return {
		// content: CONTENT['/'],
		// layout: LAYOUT,
		meta: {
			...METADATA
		}
	}
}
