/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

export default function typeWriter(el, message, speed = 50) {
  let i = 0;
  function type() {
    if (i < message.length) {
      el.textContent += message.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
