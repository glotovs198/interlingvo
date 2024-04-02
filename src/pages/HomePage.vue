<template>
  <div class="wrapper">
    <div class="container">
      <img class="map" src="../assets/map.svg" alt="map" />
      <language-heart />
    </div>
  </div>
</template>

<script>
import { LanguageHeart } from "../components";

export default {
  components: { LanguageHeart },
};
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #bccbd5;
}

.container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.map {
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 10px);
  object-fit: cover;
}
</style>
