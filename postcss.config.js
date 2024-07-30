import cssnanoPlugin from "cssnano";

export default {
	plugins: {
		"postcss-import": {},
		"tailwindcss/nesting": {},
		tailwindcss: {},
		autoprefixer: {},
		cssnanoPlugin: cssnanoPlugin({ preset: "default" }),
	},
};
