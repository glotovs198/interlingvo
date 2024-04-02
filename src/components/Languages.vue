<template>
  <div class="container">
    <div
      v-for="(language, idx) in languages"
      :key="language.iconPath"
      class="language-item"
      :class="{ active: selectedLanguageIdx === idx }"
      @click="() => (selectedLanguageIdx = idx)"
    >
      <img :src="language.iconPath" alt="Russia" />
      <p>{{ language.text }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const selectedLanguageIdx = ref(0);
    const languages = [
      {
        iconPath: "src/assets/russia.svg",
        text: "Русский",
      },
      {
        iconPath: "src/assets/great-britan.svg",
        text: "English",
      },
      {
        iconPath: "src/assets/china.svg",
        text: "中文",
      },
      {
        iconPath: "src/assets/japan.svg",
        text: "日本語",
      },
      {
        iconPath: "src/assets/norway.svg",
        text: "Norsk",
      },
      {
        iconPath: "src/assets/germany.svg",
        text: "Deutsch",
      },
      {
        iconPath: "src/assets/south-korea.svg",
        text: "한국어",
      },
      {
        iconPath: "src/assets/france.svg",
        text: "Français",
      },
      {
        iconPath: "src/assets/italy.svg",
        text: "Italiano",
      },
      {
        iconPath: "src/assets/spain.svg",
        text: "Español",
      },
      {
        iconPath: "src/assets/netherlands.svg",
        text: "Nederlands",
      },
      {
        iconPath: "src/assets/portugal.svg",
        text: "Português",
      },
      {
        iconPath: "src/assets/finland.svg",
        text: "Suomi",
      },
      {
        iconPath: "src/assets/denmark.svg",
        text: "Dansk",
      },
      {
        iconPath: "src/assets/turkey.svg",
        text: "Türkçe",
      },
      {
        iconPath: "src/assets/algeria.svg",
        text: "العربية",
      },
    ];

    return { languages, selectedLanguageIdx };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 14px;
  column-gap: 11px;
}

.language-item {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #c7d6e0;
  padding: 2px 8px;
  transition: all 0.2s ease;
}

.language-item.active {
  background: white;
}
.language-item img {
  width: 20px;
  height: 20px;
}

.language-item p {
  font-size: 14px;
}
</style>
