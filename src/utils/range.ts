export const range = (
  start: number,
  end: number,
  length = end - start
): Array<number> => Array.from({ length }, (_, i) => start + i);
