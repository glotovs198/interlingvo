<template>
  <div class="wrapper">
    <div class="container">
      <img class="image" src="../assets/world-heart.svg" alt="world-heart" />
      <language-heart />
    </div>
  </div>
</template>

<script>
import LanguageHeart from "../components/LanguageHeart.vue";
export default {
  components: { LanguageHeart },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #bccbd5;
  position: relative;
  min-height: 100vh;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100vw;
  overflow: hidden !important;
  padding-left: 10px;
  padding-right: 10px;
  overflow-y: auto;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 400px;
}

.image {
  position: absolute;
  width: 100%;
}
</style>
