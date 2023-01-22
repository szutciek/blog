<template>
  <div class="user">
    <div class="about">
      <div class="left">
        <h1>{{ user.name }}</h1>
      </div>
      <div class="right">
        <img :src="user.profile" :alt="`${user.name}'s Profile'`" />
        <ul>
          <li v-for="role of user.roles" :key="role">{{ role }}</li>
        </ul>
      </div>
    </div>

    <div class="horScroll">
      <div class="article latest"></div>
      <div class="article"></div>
    </div>
  </div>
</template>

<script setup>
const user = useState("userPage");
</script>

<style scoped>
.about {
  display: flex;
  justify-content: space-between;
}
.about h1 {
  font-size: 10rem;
  font-family: "Raleway";
  font-weight: 400;
  line-height: 100%;
  color: white;
}
.about img {
  height: 200px;
  height: 200px;
  border-radius: 50%;
}
.about ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.about ul li {
  list-style: none;
}

.user {
  margin: 1rem;
  margin-top: 64px;

  padding: 4rem;
  width: calc(100% - 2rem);

  background-color: #d4d4d4;
  background-image: linear-gradient(-60deg, rgb(63, 67, 78), rgb(57, 57, 57));
  border-radius: 1rem;
}
</style>
