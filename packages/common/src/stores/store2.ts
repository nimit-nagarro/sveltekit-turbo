// src/stores/Store2.js
import { writable } from 'svelte/store';
console.log("Hi I am called from store2.ts which is not invoked from anywhere");
export const text = writable('Initial text');

export function setText(newText) {
  text.set(newText);
}

export function clearText() {
  text.set('');
}
