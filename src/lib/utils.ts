import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetcher = (url: string) =>
  axios
    .get(url, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } })
    .then((res) => res.data);