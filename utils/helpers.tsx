import { ConfigFilePath } from "./const";

export function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export async function getConfiguration() {
  // try {
    const res = await fetch(ConfigFilePath);
    return await res.json();
  // } catch (error) {
    // console.error(error);
  // }
}