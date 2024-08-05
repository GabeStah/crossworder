import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hideElement(element?: HTMLElement): void {
  if (!element) return;
  element.style.display = 'none';
}

export function showElement(element?: HTMLElement): void {
  if (!element) return;
  element.style.display = '';
}

export function toggleElementVisibility(element?: HTMLElement): void {
  if (!element) return;
  element.style.display = element.style.display === 'none' ? '' : 'none';
}
