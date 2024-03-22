// src/stores/Store1.js
import { writable } from 'svelte/store';
console.log("Hi I am called from store1.ts which is having count");
export const count = writable(0);

export function increment() {
  count.update(n => n + 1);
}

export function decrement() {
  count.update(n => n - 1);
}
