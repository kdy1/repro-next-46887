// @ts-ignore
import { Cite } from "@citation-js/core";
import "@citation-js/plugin-csl";

export const dynamic = "force-dynamic";


const reference = { id: 'a', title: 'Item A', issued: { 'date-parts': [[2016]] } };

function formatReference(r: any): string {
  const cite = new Cite(r);

  const bib = cite.format("bibliography", {format: "text", template: "apa"});
  console.log(bib);

  return bib;
}

export default function Home() {
  return <text>{formatReference(reference)}</text>
}
