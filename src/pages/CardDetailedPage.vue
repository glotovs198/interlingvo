<template>
  <main-layout>
    <div class="container">
      <h1 class="title">Jenni_, 33 года, Мексика</h1>
      <div class="images">
        <img
          v-for="(image, idx) in images"
          :key="image"
          :src="image"
          alt="detailed image"
          @click="openDetailedImageModal(idx)"
        />
      </div>
      <div class="social-info">
        <h2 class="title">Мой социальный статус</h2>
        <p>образование: высшеепрофессиональный</p>
        <p>статус: служащий</p>
      </div>
      <div class="social-actions">
        <button @click="() => router.push('/send-message')">
          Отправить Jenni_ сообщение
        </button>
        <button @click="() => router.push('/send-message')">
          Отправить Jenni_ открытку
        </button>
      </div>
    </div>
  </main-layout>
  <transition>
    <div
      v-if="isDetailedModalOpen"
      class="modal"
      @click="() => (isDetailedModalOpen = false)"
    >
      <div class="modal-overlay" />
      <div class="modal-content">
        <img
          @click.stop=""
          :src="images[selectedImageIdx]"
          alt="detailed image"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import { useRouter } from "vue-router";
import { MainLayout } from "../components/layout";
import { ref } from "vue";
export default {
  components: { MainLayout },
  setup() {
    const isDetailedModalOpen = ref(false);
    const selectedImageIdx = ref(0);
    const images = [
      "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1526413425697-1d271fdbe7a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1467632499275-7a693a761056?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1467632499275-7a693a761056?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1526413425697-1d271fdbe7a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    ];

    const openDetailedImageModal = (idx) => {
      selectedImageIdx.value = idx;
      isDetailedModalOpen.value = true;
    };

    const router = useRouter();

    return {
      images,
      selectedImageIdx,
      isDetailedModalOpen,
      openDetailedImageModal,
      router,
    };
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.container {
  margin-top: 20px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 20px;
}

.title {
  font-size: 14px;
}

.images {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.images img {
  width: 104px;
  height: 104px;
  object-fit: cover;
  background: lightgray;
}

.social-info {
  margin-top: 9px;
}

.social-info .title {
  font-size: 12px;
  margin-bottom: 5px;
}

.social-actions {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
}

.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 2;
}

.modal-content img {
  width: calc(100% - 30px);
}
</style>
