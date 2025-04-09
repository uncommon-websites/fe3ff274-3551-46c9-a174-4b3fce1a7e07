// Types
import { METADATA } from "$lib/content";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
	return {
		metadata: {
			...METADATA,
			title: "Home",
			description: "Welcome to my website!"
		}
	};
};
