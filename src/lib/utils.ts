import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import data from "../../public/data.json"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAllZipcodes = () => {
  const zips = new Set<string>();
  data.forEach((item) => {
      if (item.zipcode) zips.add(String(item.zipcode));
  });
  return Array.from(zips).sort();
}
