<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useState("homeSlides", () => {
  return [
    {
      _id: "832kdsa",
      title: "I'm in my moms car",
      description:
        "Rating the new Apple quad (with sticker and charger included in the box).",
      tags: [
        {
          content: "Vehicles",
          background: "#53e6c4",
        },
        {
          content: "Tech",
          background: "#3a70d3",
        },
      ],
      backgroundType: "vid",
      backgroundSrc: "https://blog.kanapka.eu/assets/images/videoQuad2245.mp4",

      author: {
        name: "Kanapkador",
        profile: "https://kanapka.eu/assets/maciej.jpg",
        roles: ["Web Developer", "Creator"],
      },

      duration: 4000,
      currentTime: 0,
    },
    {
      _id: "59403jfisdo",
      title: "Warsaw in review",
      description: "I review Warsaw as a experienced resident.",
      tags: [
        {
          content: "Warsaw",
          background: "#e0d959",
        },
        {
          content: "City",
          background: "#7fe979",
        },
      ],

      backgroundType: "img",
      backgroundSrc: "https://blog.kanapka.eu/assets/images/IMG_1326.jpg",

      author: {
        name: "Kanapkador",
        profile: "https://kanapka.eu/assets/maciej.jpg",
        roles: ["Web Developer", "Creator"],
      },

      duration: 5000,
      currentTime: 0,
    },
    {
      _id: "fkdsp5934",
      title: "Testing the new Airbus 420",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore veritatis quidem dolor saepe temporibus placeat qui quas ipsum ducimus consequuntur pariatur hic odio et provident possimus voluptatem eius, praesentium corporis excepturi! Temporibus rem optio odio, consectetur asperiores excepturi corporis.",
      tags: [
        {
          content: "Flight",
          background: "#9c59e0",
        },
      ],

      backgroundType: "img",
      backgroundSrc: "https://blog.kanapka.eu/assets/images/IMG_3140.jpg",

      author: {
        name: "Kanapkador",
        profile: "https://kanapka.eu/assets/maciej.jpg",
        roles: ["Web Developer", "Creator"],
      },

      duration: 4000,
      currentTime: 0,
    },
    {
      _id: "joias97a93",
      title: "Learning how to Blender 3D",
      description: "I tried my best at designing something nice in Blender.",
      tags: [
        {
          content: "Tech",
          background: "#3a70d3",
        },
        {
          content: "Animations",
          background: "#e1ba47",
        },
        {
          content: "3D Modeling",
          background: "#dd3939",
        },
      ],

      backgroundType: "vid",
      backgroundSrc: "https://blog.kanapka.eu/assets/images/column.mp4",

      author: {
        name: "Kanapkador",
        profile: "https://kanapka.eu/assets/maciej.jpg",
        roles: ["Web Developer", "Creator"],
      },

      duration: 4000,
      currentTime: 0,
    },
    {
      _id: "jidosa45d32",
      title: "Creating a new system for McDonalds",
      description:
        "I spent a lot of time coding a new solution for the huge corporation named McDonalds.",
      tags: [
        {
          content: "Programming",
          background: "#f6a52d",
        },
      ],

      backgroundType: "img",
      backgroundSrc: "https://blog.kanapka.eu/assets/images/coding.webp",

      author: {
        name: "Kanapkador",
        profile: "https://kanapka.eu/assets/maciej.jpg",
        roles: ["Web Developer", "Creator"],
      },

      duration: 5000,
      currentTime: 0,
    },
    {
      _id: "02384joisa",
      title: "Getting a #1 Victory Royale",
      description: "Playing Fortnite and getting that shiny crown & glider.",
      tags: [
        {
          content: "Gaming",
          background: "#dd449b",
        },
      ],

      backgroundType: "vid",
      backgroundSrc: "https://blog.kanapka.eu/assets/videos/mini-video.mp4",

      author: {
        name: "Kanapkador",
        profile: "https://kanapka.eu/assets/maciej.jpg",
        roles: ["Web Developer", "Creator"],
      },

      duration: 35 * 1000,
      currentTime: 0,
    },
  ];
});

useState("userPage", () => {
  return {
    name: "Kanapkador",
    profile: "https://kanapka.eu/assets/maciej.jpg",
    about: "Aspiring web developer. Creator of Kanapka Blog",
    roles: ["Web Developer", "Creator"],
  };
});
</script>

<style>
:root {
  --main-color-l: #acedff;
  --main-color: #89bbfe;
  --main-color-d: #6F8AB7

  --font-color: #1e1e1e;
  --background-color: white;
}

::-webkit-scrollbar {
  width: 0;
}
::-webkit-scrollbar-track {
  background: #ececec;
}
::-webkit-scrollbar-thumb {
  background: #a7a7a7;
}
::-webkit-scrollbar-thumb:hover {
  background: #4e4e4e;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Poppins, serif;
  background-color: var(--background-color);
}

@font-face {
  font-family: "Raleway";
  src: url(https://assets.kanapka.eu/fonts/Raleway-VariableFont_wght.ttf);
  font-display: fallback;
}




@font-face {
  font-family: "Poppins";
  font-weight: 900;
  src: url(https://assets.kanapka.eu/fonts/Poppins/Poppins-ExtraBold.ttf);
  font-display: fallback;
}
@font-face {
  font-family: "Poppins";
  font-weight: 800;
  src: url(https://assets.kanapka.eu/fonts/Poppins/Poppins-Bold.ttf);
  font-display: fallback;
}
@font-face {
  font-family: "Poppins";
  font-weight: 700;
  src: url(https://assets.kanapka.eu/fonts/Poppins/Poppins-SemiBold.ttf);
  font-display: fallback;
}
@font-face {
  font-family: "Poppins";
  font-weight: 500;
  src: url(https://assets.kanapka.eu/fonts/Poppins/Poppins-Medium.ttf);
  font-display: fallback;
}
@font-face {
  font-family: "Poppins";
  font-weight: 400;
  src: url(https://assets.kanapka.eu/fonts/Poppins/Poppins-Regular.ttf);
  font-display: fallback;
}

.max1000 {
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
}

.hugeF {
  font-size: 3rem !important;
}
.largeF {
  font-size: 1.5rem !important;
}
.mediumF {
  font-size: 1rem !important;
}
.smallF {
  font-size: 0.75rem !important;
}

.eBoldW {
  font-weight: 900 !important;
}
.boldW {
  font-weight: 800 !important;
}
.semiBoldW {
  font-weight: 700 !important;
}
.mediumW {
  font-weight: 500 !important;
}
.regularW {
  font-weight: 400 !important;
}

.maxLineText {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.max2LinesText {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
