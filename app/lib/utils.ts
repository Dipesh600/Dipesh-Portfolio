import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and merges Tailwind classes using tailwind-merge
 * @param inputs - Class names to combine
 * @returns Merged class names string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string into a localized format
 * @param date - Date string or Date object
 * @returns Formatted date string
 */
export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Delays execution for a specified number of milliseconds
 * @param ms - Number of milliseconds to delay
 * @returns Promise that resolves after the delay
 */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Checks if the current environment is production
 */
export const isProd = process.env.NODE_ENV === "production";

/**
 * Checks if the current environment is development
 */
export const isDev = process.env.NODE_ENV === "development";

/**
 * Checks if the code is running on the client side
 */
export const isClient = typeof window !== "undefined";

/**
 * Checks if the code is running on the server side
 */
export const isServer = typeof window === "undefined"; 