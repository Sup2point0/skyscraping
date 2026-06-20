import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";
import { mdsvex } from "mdsvex";

import mdsvex_config from "./config/mdsvex-config.js";


const config = {
  extensions: [".svelte", ".md", ".svx"],

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
      precompress: false,
      strict: true,
    }),
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH
    },
    alias: {
      "#src": "./src/",
      "#parts": "./src/parts",
      "#styles": "./src/styles",
      "#scripts": "./src/scripts",
    },
    prerender: {
      handleHttpError: "warn",
      handleMissingId: "warn",
    },
  },

  preprocess: [
    mdsvex(mdsvex_config),
    sveltePreprocess({
      scss: {
        includePaths: ["src/styles"],
        prependData: `
          @use 'mixins/colours' as *;
          @use 'mixins/fonts' as *;
          @use 'mixins/links' as *;
        `,
      }
    }),
  ],
};

export default config;
