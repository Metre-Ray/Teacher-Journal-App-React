export function sortObjects(value: Array<string | object>, field?: string): Array<string | object> {
  if (!value || !value.length) { return value; }
  const result: Array<string | object> = [...value];
  if (!field) { return result.sort(); }
  result.sort((el1, el2) => el1[field] <= el2[field] ? -1 : 1);
  return result;
}
