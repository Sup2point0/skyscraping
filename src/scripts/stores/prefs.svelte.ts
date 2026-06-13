import { persisted } from "svelte-persisted-store";


/**
 * User preferences for the site.
 */
export const prefs = persisted("skyscraping.prefs", {
  center_puzzles:        true,
  underline_links:       true,
  show_glossary_links:   true,
  dotted_glossary_links: true,

  show_case_recursion: false,
});
