import { createSignal } from "solid-js";

export function add(a: number, b: number): number {
  // This works correctly even with `solid-js` unresolved dependency as it is
  // assumed by the Deno extension code highlighting
  const [sum, setSum] = createSignal(0);
  setSum(a + b);
  return sum();
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
