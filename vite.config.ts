import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, loadEnv } from "vite";
import Icons from "unplugin-icons/vite";

export default defineConfig(({ mode }) => {
	// Load env file based on mode
	const env = loadEnv(mode, process.cwd(), "");

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
				overlay: env.UNC_ENV !== "preview"
			}
		}
	};
});
