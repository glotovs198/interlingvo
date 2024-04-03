<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="header-body">
          <div class="logo-box">
            <img src="../assets/logo.svg" alt="interlingvo" />
          </div>
          <button @click="openBottomSheet" class="select-language-btn">
            <img class="icon" src="../assets/russia.svg" alt="Russian" />
            <p>Русский</p>
            <img src="../assets/down-arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
    <div class="header-actions">
      <div class="container">
        <div class="header-actions-body">
          <router-link class="button" to="/registration">
            <img src="../assets/register-icon.svg" alt="registration" />
            <b>Регистрация</b>
          </router-link>

          <router-link class="button" to="/feed">
            <img src="../assets/search-icon.svg" alt="registration" />
            <b>Поиск анкет</b>
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <transition name="modal">
    <div v-if="isOpenBottomSheet" class="bottom-sheet">
      <div @click="closeBottomSheet" class="bottom-sheet-overlay" />
      <transition v-if="isOpenBottomSheet" name="content" appear>
        <div class="bottom-sheet-content">
          <div class="container">
            <div class="bottom-sheet-content-info">
              <h3>Выберите язык</h3>
              <img
                @click="closeBottomSheet"
                src="../assets/close.svg"
                alt="close"
              />
            </div>
            <ul class="bottom-sheet-content-list">
              <li
                @click="selectLanguage"
                v-for="language in languages"
                :key="language.text"
              >
                <div class="bottom-sheet-content-list-item">
                  <img :src="language.iconPath" alt="" />
                  <p>{{ language.value }} ({{ language.text }})</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isOpenBottomSheet = ref(false);
    const languages = [
      {
        value: "RU",
        text: "Русский",
        iconPath: "/russia.svg",
      },
      {
        value: "EN",
        text: "English",
        iconPath: "/great-britan.svg",
      },
      {
        value: "ZH",
        text: "中文",
        iconPath: "/china.svg",
      },
      {
        value: "KO",
        text: "한국어",
        iconPath: "/south-korea.svg",
      },
      {
        value: "JA",
        text: "日本語",
        iconPath: "/japan.svg",
      },
      {
        value: "NO",
        text: "Norsk",
        iconPath: "/norway.svg",
      },
      {
        value: "FR",
        text: "Français",
        iconPath: "/france.svg",
      },
      {
        value: "ES",
        text: "Español",
        iconPath: "/spain.svg",
      },
      {
        value: "PT",
        text: "Português",
        iconPath: "/portugal.svg",
      },
      {
        value: "DA",
        text: "Dansk",
        iconPath: "/denmark.svg",
      },
      {
        value: "DE",
        text: "Deutsch",
        iconPath: "/germany.svg",
      },
      {
        value: "IT",
        text: "Italiano",
        iconPath: "/italy.svg",
      },
      {
        value: "NL",
        text: "Nederlands",
        iconPath: "/netherlands.svg",
      },
      {
        value: "FI",
        text: "Suomi",
        iconPath: "/finland.svg",
      },
      {
        value: "TR",
        text: "Türkçe",
        iconPath: "/turkey.svg",
      },
      {
        value: "AR",
        text: "العربية",
        iconPath: "/algeria.svg",
      },
    ];

    const openBottomSheet = () => {
      document.body.classList.add("scroll-lock");
      isOpenBottomSheet.value = true;
    };

    const closeBottomSheet = () => {
      document.body.classList.remove("scroll-lock");
      isOpenBottomSheet.value = false;
    };

    const selectLanguage = () => {
      closeBottomSheet();
    };

    return {
      languages,
      isOpenBottomSheet,
      openBottomSheet,
      closeBottomSheet,
      selectLanguage,
    };
  },
};
</script>

<style scoped>
.modal-enter-active {
  animation: fade-in 0.2s;
}

.content-enter-active {
  animation: wait-and-slide-up 0.4s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes wait-and-slide-up {
  0% {
    transform: translateY(100%);
  }

  50% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
}

.header-top {
  background: #bccbd5;
  padding-top: 23px;
  padding-bottom: 15px;
}

.header-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button {
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 11px;
}

.button b {
  color: #ff5f5f;
  text-decoration: underline;
}

.container {
  padding-left: 16px;
  padding-right: 16px;
}

.logo-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.logo-title {
  font-size: 28px;
  color: #dce0e4;
  letter-spacing: 4px;
}

.select-language-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: white;
  border: none;
  border-radius: 3px;
  padding: 4px 14px;
}

.select-language-btn .icon {
  width: 24px;
  height: 24px;
}

.select-language-btn p {
  font-size: 16px;
}

.header-actions {
  margin-top: 10px;
}

.header-actions-body {
  display: flex;
  align-items: center;
  gap: 20px;
}

.bottom-sheet {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  height: 100%;
  z-index: 20;
  display: flex;
}

.bottom-sheet-overlay {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 21;
}

.bottom-sheet-content {
  z-index: 22;
  height: 80%;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-top: 20px;
  overflow-y: auto;
}

.bottom-sheet-content-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottom-sheet ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
}

.bottom-sheet li {
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
}

.bottom-sheet-content-list-item {
  display: flex;
  align-items: center;
  gap: 7px;
}

.bottom-sheet-content-list-item img {
  width: 28px;
  height: 28px;
}

.bottom-sheet-content-list-item p {
  font-size: 16px;
}

@media (max-width: 370px) {
  .logo-title {
    font-size: 22px;
  }
}
</style>
