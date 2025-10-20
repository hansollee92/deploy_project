<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";

const title = ref("");

const getTitle = async () => {
  let res = await axios.get("/api/board").catch(console.log);
  title.value = res.data.title;
};

onBeforeMount(() => {
  getTitle();
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
