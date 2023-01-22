<template>
  <button @click="trackMouse">{{ text }}</button>
</template>

<script setup>
defineProps({
  text: "String",
});
</script>

<style scoped>
button {
  color: #1f1f1f;

  padding: 0 1.5rem;
  height: 40px;

  background-color: #f6f6f6;
  border: 1px solid transparent;
  border-radius: 0.5rem;

  font-family: Poppins, serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 100%;

  cursor: pointer;
}

button:hover {
  background-color: #e6e6e6;
  border: 1px solid #e6e6e6;
}
</style>
