<template>
  <div class="post">
    <div class="headWrapper">
      <div class="headFull">
        <div class="background">
          <img
            v-show="slide.backgroundType === 'img'"
            :src="slide.backgroundSrc"
            :alt="slide.title"
          />
          <video
            muted
            autoplay
            loop
            v-show="slide.backgroundType === 'vid'"
            :src="slide.backgroundSrc"
            :alt="slide.title"
            :id="`${slide._id}_video`"
          />
        </div>
        <div class="headFullContent">
          <div class="bottom">
            <h1 :id="`${slide._id}_title`">
              {{ slide.title }}
            </h1>
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
    </div>
  </div>
</template>

<script setup>
const slides = useState("loadedArticles").value;
const route = useRoute();
const router = useRouter();

const slide = ref(
  slides.find((s) => s.title === route.params.title.replaceAll("_", " "))
);

if (!slide) router.push("/");

if (!process.server) {
  if (slide.value.backgroundType === "vid") {
    const video = document.getElementById(`${slide.value._id}_video`);
    video.currentTime = Number(route.query.t);
    video.play();
  }
}
</script>

<style scoped>
* {
  font-family: Raleway, serif;
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
.post {
  min-height: 150vh;
}
.headWrapper {
  height: calc(100vh - 64px);
}
.headFull {
  position: relative;

  margin: 1rem;
  margin-top: 64px;

  width: calc(100% - 2rem);
  height: calc(100vh - 64px - 1rem);

  overflow: hidden;
  border-radius: 1rem;
}
</style>
