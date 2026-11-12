import { getCollection, type DataEntryMap } from 'astro:content';

type Ordered = 'publications' | 'talks' | 'awards' | 'service' | 'positions';

/** Load a YAML-backed collection in the order entries appear in the file. */
export async function getOrdered<C extends Ordered>(
  name: C,
  filter?: (entry: DataEntryMap[C][string]) => boolean,
) {
  const items = await getCollection(name, filter as never);
  return items.sort((a, b) => a.data.order - b.data.order);
}
