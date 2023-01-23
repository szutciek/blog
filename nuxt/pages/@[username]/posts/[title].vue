<template>
  <div class="post">
    <div class="headFull">
      <div class="background">
        <img
          v-show="slide.backgroundType === 'img'"
          :src="slide.backgroundSrc"
          :alt="slide.title"
        />
        <video
          muted
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
    <div class="postPage">
      <div class="center max1000">
        <div class="mainData">
          <ul class="tags">
            <li v-for="tag of slide.tags" :key="tag.content">
              <NuxtLink :to="`/explore/${tag.content}`">{{
                tag.content
              }}</NuxtLink>
            </li>
          </ul>
          <div class="date">
            {{
              new Date(slide.date).toLocaleDateString("en-UK", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
              })
            }}
          </div>
        </div>
        <div class="mainDetails">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.description }}</p>
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
        <div class="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur omnis voluptates ipsam corporis quia totam debitis sunt
            mollitia vel. Iusto voluptate obcaecati odio natus totam et quae
            vero in voluptatum explicabo odit cum ex, dolor velit reiciendis
            amet quisquam maiores quas. Explicabo, dolorum. Eveniet quis dolor
            tempora suscipit. Beatae repellendus eaque maiores, recusandae
            aliquam nobis laudantium aut, ipsum pariatur vel vero reiciendis
            magnam adipisci neque, qui voluptates asperiores possimus
            consectetur.
          </p>
          <img
            src="https://assets.kanapka.eu/images/classroom.jpeg"
            alt="Image"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            atque, rem assumenda tempora natus quaerat ratione nobis corrupti
            libero a.
          </p>
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

const playVidTime = () => {
  const video = document.getElementById(`${slide.value._id}_video`);
  if (video) {
    video.currentTime = Number(route.query.t) || 0;
    video.play();
    return true;
  }
  return false;
};

let playVidInterval;

if (!process.server) {
  if (slide.value.backgroundType === "vid") {
    playVidInterval = setInterval(() => {
      if (playVidTime()) clearInterval(playVidInterval);
    }, 1000 / 60);
  }
}
</script>

<style scoped>
* {
  font-family: Raleway, serif;
}

.postPage {
  padding: 3rem 0;
}
.mainDetails h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #101010;
  line-height: 100%;
  margin-bottom: 1.25rem;

  animation: slideInTop 1s cubic-bezier(0.25, 1, 0.5, 1) 0.8s both !important;
}
.mainDetails p {
  font-size: 1.1rem;
  font-weight: 500;
  color: #4b4b4b;
  text-align: justify;

  animation: appear 0.5s ease-out 1.5s both !important;
}
.center .mainData {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  margin-bottom: 1.25rem;
  animation: appear 0.5s ease-out 1.5s both !important;
}
.mainData .tags {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.mainData .tags li {
  list-style: none;
  font-size: 1rem;
  font-weight: 400;

  padding: 0.25rem 0.75rem;
  background-color: #e9e9e9;
  border-radius: 4px;
}
.mainData .tags li a {
  text-decoration: none;
  color: #242424;
}
.mainData .date {
  font-size: 1rem;
  font-weight: 400;
  color: #242424;
}

.center .author {
  display: flex;
  align-items: center;
  gap: 0.6rem;

  padding: 0 0.5rem 1.25rem 0.5rem;
  border-bottom: 1px dashed #afafaf;
  margin: 1.5rem 0;

  animation: appear 0.5s ease-out 1.5s both !important;
}
.center .author h2 {
  color: #0f0f0f;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 100%;
  margin-bottom: 0.4rem;
}
.center .author ul {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.center .author li {
  list-style: none;
  font-size: 0.8rem;
  font-weight: 400;
  color: #1f1f1f;
  line-height: 100%;
  position: relative;
}
.center .author li:first-child::after {
  display: none;
}
.center .author li::after {
  content: "";
  position: absolute;
  top: 0.2rem;
  left: -0.55rem;

  width: 0.15rem;
  height: 0.15rem;
  border-radius: 50%;
  background-color: #6f6f6f;
}
.center a {
  text-decoration: none;
}
.center .author img {
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 50%;
}

.text {
  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  animation: appear 0.5s ease-out 1.5s both !important;
}
.text p {
  font-size: 1.1rem;
  font-weight: 400;
  color: #4b4b4b;
  text-align: justify;
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

.headFullContent {
  animation: fullHeaderContentLoad 2s cubic-bezier(0.5, 0, 0.75, 0) 0s both !important;
}
.headFullContent h1 {
  animation: slideOutBottom 1s cubic-bezier(0.5, 0, 0.75, 0) 0s both !important;
}
.headFullContent p {
  animation: slideOutBottom 1s cubic-bezier(0.5, 0, 0.75, 0) 0s both !important;
}
.headFullContent .author {
  animation: slideOutRight 0.5s cubic-bezier(0.5, 0, 0.75, 0) 0s both !important;
}
.headFullContent .tagList {
  animation: slideOutBottom 0.5s cubic-bezier(0.5, 0, 0.75, 0) 0s both !important;
}

.headFull {
  animation: fullHeaderLoad 2s cubic-bezier(0.76, 0, 0.24, 1) 0s both !important;
}

@keyframes slideOutBottom {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
  100% {
    transform: translateY(200px);
    opacity: 0;
    display: none;
  }
}

@keyframes slideInTop {
  0% {
    transform: translateY(-200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100px);
    opacity: 0;
    display: none;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fullHeaderLoad {
  0% {
    width: calc(100% - 2rem);
    height: calc(100vh - var(--nav-height) - 1rem);
  }
  50% {
    border-radius: 0;
  }
  100% {
    margin: var(--nav-height) 0 0 0;
    border-radius: 0;
    width: 100%;
    height: calc(40vh - var(--nav-height));
  }
}

@keyframes fullHeaderContentLoad {
  0% {
    background-repeat: no-repeat;
    background-position-y: 0;
  }
  100% {
    background-repeat: no-repeat;
    background-position-y: 100vh;
    display: none;
    margin: 0 1rem;
  }
}
</style>
