import { ReactNode } from "react";

export function repeat(qty: number, element: (k: number) => ReactNode) {
  return Array.from({ length: qty }, (_, k) => element(k));
}
