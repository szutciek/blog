export class Slideshow {
  slides = [];
  autoSpin = true;
  interval = undefined;

  constructor(slides) {
    slides.forEach((slide, i) => {
      slide.percentage = ref(0);
      this.slides.push(slide);
    });

    if (!process.server) {
      this.changeSlide(0);
      this.autoSpinSlides();
    }
  }

  currentSlide = 0;

  lastTime = new Date().getTime();

  getSlideElement(id) {
    if (!process.server) return document.getElementById(id);
  }

  slideOut(id, delayCoefficient = 0) {
    const elem = this.getSlideElement(id);
    if (elem) {
      setTimeout(() => {
        elem.style.transform = `translateX(100%)`;
      }, delayCoefficient * 60);
    }
  }

  slideIn(id, delayCoefficient = 0) {
    const elem = this.getSlideElement(id);
    if (elem) {
      setTimeout(() => {
        elem.style.transform = `translateX(0)`;
      }, delayCoefficient * 60);
      document
        .getElementById(`${this.slides[this.currentSlide]._id}_title`)
        .animate(
          [
            { transform: "translateY(80px)", opacity: 0.33 },
            { transform: "translateY(0)", opacity: 1 },
          ],
          {
            duration: 1200,
            delay: delayCoefficient * 60 + (delayCoefficient !== 0 ? 300 : 0),
            fill: "both",
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          }
        );
      document
        .getElementById(`${this.slides[this.currentSlide]._id}_description`)
        .animate(
          [{ transform: "translateY(60px)" }, { transform: "translateY(0)" }],
          {
            duration: 2200,
            delay: delayCoefficient * 60 + (delayCoefficient !== 0 ? 300 : 0),
            fill: "both",
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          }
        );
      document
        .getElementById(`${this.slides[this.currentSlide]._id}_tags`)
        .animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 1500,
          delay: delayCoefficient * 60 + (delayCoefficient !== 0 ? 500 : 0),
          fill: "both",
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        });
    }
  }

  userChangeSlide(i) {
    this.autoSpin = false;
    this.currentSlide = i;
    this.showSlide(true);
  }

  changeSlide(i) {
    this.currentSlide = i;
    this.showSlide(false);
  }

  showSlide(clearTimeAll = false) {
    this.slides[this.currentSlide].currentTime = 0;

    for (let i = 0; i <= this.currentSlide; i++) {
      this.slideIn(this.slides[i]._id, i);
    }
    for (let i = this.slides.length - 1; i > this.currentSlide; i--) {
      this.slideOut(this.slides[i]._id, this.slides.length - i - 1);
    }

    if (this.slides[this.currentSlide].backgroundType === "vid") {
      const bg = document.getElementById(
        `${this.slides[this.currentSlide]._id}_background`
      );
      if (!bg) return;
      bg.currentTime = 0;
      bg.play();
    }

    if (!clearTimeAll) {
      for (let i = this.currentSlide + 1; i < this.slides.length; i++) {
        this.slides[i].currentTime = 0;
        this.slides[i].percentage = 0;
      }
    } else {
      this.slides.forEach((s) => {
        s.currentTime = 0;
        s.percentage = 0;
      });
    }
  }

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.changeSlide(this.currentSlide + 1);
    } else {
      this.changeSlide(0);
    }
  }
  prevSlide() {
    if (this.currentSlide > 0) {
      changeSlide(this.currentSlide - 1);
    } else {
      changeSlide(this.slides.length - 1);
    }
  }

  autoSpinSlides() {
    let lastTime = new Date().getTime();
    if (!process.server) {
      this.interval = setInterval(() => {
        if (this.autoSpin)
          lastTime = this.slideProgress(this.currentSlide, lastTime);
        if (this.slides[this.currentSlide].backgroundType === "vid") {
          this.slides[this.currentSlide].videoTime = document.getElementById(
            `${this.slides[this.currentSlide]._id}_background`
          ).currentTime;
        } else lastTime = new Date().getTime();
      }, 1000 / 30);
    }
  }
  stopSpin(i) {
    if (i === this.currentSlide) {
      if (this.slides[i].backgroundType === "vid") {
        document.getElementById(`${this.slides[i]._id}_background`).pause();
      }
      this.autoSpin = false;
    }
  }
  startSpin(i) {
    if (i === this.currentSlide) {
      if (this.slides[i].backgroundType === "vid") {
        document.getElementById(`${this.slides[i]._id}_background`).play();
      }
      this.autoSpin = true;
    }
  }
  removeInterval() {
    clearInterval(this.interval);
  }

  slideProgress(index, last) {
    const time = new Date().getTime();
    this.slides[index].currentTime += time - last;
    this.slides[index].percentage =
      (this.slides[index].currentTime / this.slides[index].duration) * 100;
    if (this.slides[index].percentage > 100) this.nextSlide();
    return time;
  }
}
