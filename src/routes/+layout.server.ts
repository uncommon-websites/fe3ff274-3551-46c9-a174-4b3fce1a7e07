// Types
import type { LayoutServerLoad } from './$types'

// Content
import { CONTENT, LAYOUT, METADATA } from '$lib/content'

export const load: LayoutServerLoad = async () => {
	return {
		content: CONTENT['/'],
		layout: LAYOUT,
		meta: {
			...METADATA
		}
	}
}
