<template>
  <main-layout>
    <component
      @completed="handleNextScreen"
      :is="currentScreen.component"
    ></component>
  </main-layout>
</template>

<script>
import { MainLayout } from "../components/layout";
import { RegistrationGender, RegistrationForm } from "../components";

import { ref, computed } from "vue";
export default {
  components: { MainLayout },

  setup() {
    const selectedIndex = ref(0);
    const screens = [
      {
        idx: 0,
        component: RegistrationGender,
      },
      {
        idx: 1,
        component: RegistrationForm,
      },
    ];

    const currentScreen = computed(() => screens[selectedIndex.value]);

    const handleNextScreen = () => {
      if (selectedIndex.value < screens.length) {
        selectedIndex.value++;
      }
    };

    return { currentScreen, handleNextScreen };
  },
};
</script>

<style scoped>
.container {
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 20px;
  padding-bottom: 20px;
}

.gender-box {
  display: flex;
  justify-content: space-evenly;
  align-items: end;
}

.gender-box-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
