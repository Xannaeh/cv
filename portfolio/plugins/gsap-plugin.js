import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);

export default defineNuxtPlugin((nuxtApp) => {
  // You can add any additional GSAP configuration here if needed.
});