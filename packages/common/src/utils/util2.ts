// src/utils/Utils2.js
export function formatDate(date: any) {
  return new Date(date).toLocaleDateString('en-US');
}

export function generateRandomNumber(min: any, max: any) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
