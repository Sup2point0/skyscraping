import type { PageData } from "stranger-quarkdown";

export function load(): PageData<"short">
{
	return {
		title: "Showerthoughts",
		desc:  "Reflections on the art of Skyscrapers",
		head:  "Showerthoughts",
		capt:  "Reflections on the art of Skyscrapers",
	};
}
