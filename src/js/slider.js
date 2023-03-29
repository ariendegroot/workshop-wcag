/**
 *
 * slider.js
 * Sliding
 *
 **/

import Glide from "@glidejs/glide";
export default class Slider {
  constructor(elem) {
    this.elem = elem;
    this.startStop = this.elem.querySelector("[data-start-stop]");
    this.initSlider();
    this.bindListeners();
  }

  initSlider() {
    console.log(this.elem);
    this.glide = new Glide(this.elem, { autoplay: 500 });
    this.glide.mount();
  }

  bindListeners() {
    this.startStop.addEventListener("click", (event) => {
      event.preventDefault();
      if (this.startStop.classList.contains("play")) {
        this.startStop.classList.remove("play");
        this.glide.pause();
        this.startStop.classList.add("pause");
        this.startStop.innerText = "Start";
      } else {
        this.startStop.classList.remove("pause");
        this.glide.play();
        this.startStop.classList.add("play");
        this.startStop.innerText = "Stop";
      }
    });
  }

  static getSelector() {
    return "[data-slider]";
  }
}
