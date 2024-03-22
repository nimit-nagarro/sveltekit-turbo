// src/utils/Utils1.js
export function capitalizeFirstLetter(str: any) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function shuffleArray(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
