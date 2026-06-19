import sample from "@stdlib/random-sample";
import { partial_ratio } from "fuzzball";


export function filter_pages(query: string, data: object): object[]
{
  let pages = Object.values(data);

  if (query === "") return sample(pages);

  return (
    pages
    .map(page => [page, score_page(query, page)])
    .filter(([_, score]) => score > required_score(query))
    .toSorted((prot, deut) => deut[1] - prot[1])
    .map(([page, _]) => page)
  );
}


function score_page(query: string, page: object): number
{
  return Math.max(
    partial_ratio(query, page.title.toLowerCase()),
    page.capt ? partial_ratio(query, page.capt.toLowerCase()) : 0,
  );
}

function required_score(query: string): number
{
  let frac = 1 - 1 / (1 + 0.42 * query.length);
  return 90 * frac;
}
