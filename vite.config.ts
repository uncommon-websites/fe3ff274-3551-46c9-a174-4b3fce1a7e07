import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";

export default defineConfig(({ mode }) => {
	// Check if we're in development mode
	const dev = mode === "development";

	return {
		plugins: [
			tailwindcss(),
			sveltekit(),
			Icons({
				compiler: "svelte"
			})
		],
		server: {
			allowedHosts: [".unc.mn", "localhost"],
			hmr: {
				overlay: dev
			}
		}
	};
});
