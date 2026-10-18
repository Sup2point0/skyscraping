import type { PageData } from "stranger-quarkdown";

export function load(): PageData<"short">
{
	return {
		title: "Search",
		desc:  "Search pages on Skyscraping",
		head:  "Search",
		capt:  "Search pages on Skyscraping",
	};
}
