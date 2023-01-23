<template>
  <div>
    <header>
      <div class="headItem title">
        <p class="logo">b</p>
        <h1 class="siteTitle">Kanapka Blog</h1>
      </div>
      <nav class="headItem">
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/explore">Explore</NuxtLink></li>
          <li><NuxtLink to="/saved">Saved</NuxtLink></li>
        </ul>
      </nav>
      <div class="headItem state">
        <EmptyButton text="Log in" />
        <FullButton text="Sign up" />
      </div>
    </header>
    <!-- OUTPUT PAGE CONTENT -->
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 800;
  width: 100%;

  background-color: white;
  /* border-bottom: 1px solid black; */

  padding: 0.75rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.headItem {
  flex-basis: 100%;
  max-height: 40px;
}
.title,
.state {
  display: flex;
  align-items: center;
  gap: 10px;
}
.title {
  justify-content: flex-start;
}
.state {
  justify-content: flex-end;
}
.logo {
  height: 2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  color: white;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
  font-size: 1rem;
  line-height: 100%;

  background-color: #000000;
}
.siteTitle {
  color: #1f1f1f;
  font-size: 1.25rem;
  font-weight: 800;
}

nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style: none;
}
nav a {
  border-bottom: 2px solid transparent;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: #3f3f3f;

  border-radius: 4px;
  padding: 0.3rem 1rem;
}
nav a:hover {
  background-color: #f6f6f6;
}
</style>
