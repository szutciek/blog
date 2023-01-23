<template>
  <div>
    <div class="headFull">
      <div
        class="slide"
        v-for="slide of slideshow.slides"
        :key="slide._id"
        :id="slide._id"
      >
        <div class="background">
          <img
            v-if="slide.backgroundType === 'img'"
            :src="slide.backgroundSrc"
            :alt="slide.title"
            :id="`${slide._id}_background`"
          />
          <video
            muted
            v-if="slide.backgroundType === 'vid'"
            :src="slide.backgroundSrc"
            :alt="slide.title"
            :id="`${slide._id}_background`"
          />
        </div>
        <div class="headFullContent">
          <div class="bottom">
            <NuxtLink
              :to="`@${slide.author?.name}/posts/${slide.title.replaceAll(
                ' ',
                '_'
              )}${
                slide.backgroundType === 'vid'
                  ? `?t=${Math.floor(slide.videoTime * 10) / 10}`
                  : ''
              }`"
            >
              <h1 :id="`${slide._id}_title`">
                {{ slide.title }}
              </h1>
            </NuxtLink>
            <p class="max2LinesText" :id="`${slide._id}_description`">
              {{ slide.description }}
            </p>
            <ul class="tagList" :id="`${slide._id}_tags`">
              <li
                v-for="tag of slide.tags"
                :key="tag.content"
                :style="`background-color: ${tag.background}`"
              >
                <NuxtLink :to="`/explore/${tag.content}`">{{
                  tag.content
                }}</NuxtLink>
              </li>
            </ul>
          </div>
          <NuxtLink :to="`/@${slide.author?.name}`">
            <div class="author">
              <img :src="slide.author?.profile" :alt="slide.author?.name" />
              <div>
                <h2>{{ slide.author?.name }}</h2>
                <ul>
                  <li v-for="role of slide.author?.roles" :key="role">
                    {{ role }}
                  </li>
                </ul>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="slideshow">
        <div
          class="timer"
          v-for="(slide, i) of slideshow.slides"
          :key="slide.name"
          @click="slideshow.userChangeSlide(i)"
          @mouseenter="slideshow.stopSpin(i)"
          @mouseleave="slideshow.startSpin(i)"
        >
          <div class="progress" :style="`width: ${slide.percentage}%`"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount } from "vue";

const slides = useState("loadedArticles");

const slideshow = ref(new Slideshow(slides.value));

onBeforeUnmount(() => {
  slideshow.value.removeInterval();
});
</script>

<style scoped>
* {
  font-family: Raleway, serif;
}

.slideshow {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);

  margin: 1rem 0;
  height: 5px;
  width: calc(100% - 4rem);
  overflow-x: hidden;

  display: flex;
  justify-content: center;
  gap: 1rem;
}
.slideshow .timer {
  max-width: 100px;
  width: 100%;
  min-width: 40px;
  background: #ffffff52;
  backdrop-filter: blur(20px);
  border-radius: 2.5px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
}
/* .slideshow .timer:hover {
  background: #ffffff;
} */
.slideshow .progress {
  background-color: #ffffffcc;
  border-radius: 2.5px;
  height: 100%;
}

.slide {
  position: absolute;

  width: 100%;
  height: 100%;
  transform: translateX(100%);
  overflow: hidden;

  transition: 0.6s cubic-bezier(0.76, 0, 0.24, 1);
}
.slide:first-child {
  transform: translateX(0) !important;
}

.animate {
  animation: slideIn 0.5s cubic-bezier(0.76, 0, 0.24, 1) 0 forwards;
}

@keyframes slidein {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
</style>

<style>
.headFull {
  position: relative;

  margin: 1rem;
  margin-top: var(--nav-height);

  width: calc(100% - 2rem);
  height: calc(100vh - var(--nav-height) - 1rem);

  overflow: hidden;
  border-radius: 1rem;
}

.headFullContent {
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: flex-end;

  padding: 5rem 5rem 5rem 5rem;

  background-image: linear-gradient(transparent, #00000072, #000000);
}
.headFullContent h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 100%;
  color: white;
}
.headFullContent a {
  text-decoration: none;
  cursor: pointer;
}
.headFullContent p {
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 110%;
  color: #b8b8b8;
  margin-top: 1rem;
  max-width: 60vw;
}

.headFullContent .tagList {
  display: flex;
  gap: 0.75rem;
  list-style: none;
  margin-top: 3rem;
}
.headFullContent .tagList li {
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
}
.headFullContent .tagList li a {
  color: black;
}

.headFullContent .author {
  display: flex;
  align-items: center;
  gap: 0.6rem;

  position: absolute;
  right: 3.7rem;
  bottom: 4.5rem;

  padding: 0.5rem 1.3rem 0.5rem 0.5rem;
  border-radius: 5rem;

  cursor: pointer;
  transition: 0.1s;
}
.headFullContent .author:hover {
  background-color: #3a3a3a1a;
  backdrop-filter: blur(20px);
}
.headFullContent .author:hover img {
  filter: grayscale(0);
}
.headFullContent .author h2 {
  color: white;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 0.35rem;
}

.headFullContent .author ul {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.headFullContent .author li {
  list-style: none;
  font-size: 0.8rem;
  font-weight: 300;
  color: #b8b8b8;
  line-height: 100%;
  position: relative;
}
.headFullContent .author li:first-child::after {
  display: none;
}
.headFullContent .author li::after {
  content: "";
  position: absolute;
  top: 0.25rem;
  left: -0.6rem;

  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: #a6a6a6;
}
.headFullContent .author img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  filter: grayscale(1);
}

.background {
  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100%;

  text-align: center;
}
.background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
