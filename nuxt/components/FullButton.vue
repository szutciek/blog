<template>
  <button>{{ text }}</button>
</template>

<script setup>
defineProps({
  text: "String",
});
</script>

<style scoped>
button {
  color: white;

  padding: 0 1.5rem;
  height: 40px;

  background-color: #1f1f1f;
  border: 1px solid #1f1f1f;
  border-radius: 0.5rem;

  font-family: Poppins, serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 100%;

  cursor: pointer;
}
button :hover {
  background-color: #000000;
  border: 1px solid #000000;
}
</style>
