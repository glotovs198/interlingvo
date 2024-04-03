<template>
  <div class="container">
    <div class="group first">
      <router-link to="/" class="heart-item">
        <img src="../assets/great-britan.svg" alt="Great Britan" />
        <p>English</p>
      </router-link>
      <router-link to="/feed" class="heart-item">
        <img src="../assets/russia.svg" alt="Russia" />
        <p>Русский</p>
      </router-link>
    </div>
    <div class="group second">
      <router-link to="/feed" class="heart-item">
        <img src="../assets/sweden.svg" alt="Sweden" />
        <p>Svenska</p>
      </router-link>
      <router-link to="/feed" class="heart-item">
        <img src="../assets/china.svg" alt="China" />
        <p>中文</p>
      </router-link>
      <router-link to="/feed" class="heart-item">
        <img src="../assets/japan.svg" alt="Japan" />
        <p>日本語</p>
      </router-link>
      <router-link to="/feed" class="heart-item">
        <img src="../assets/norway.svg" alt="Norway" />
        <p>Norsk</p>
      </router-link>
    </div>
    <div class="group third">
      <router-link to="/feed" class="heart-item">
        <img src="../assets/germany.svg" alt="Germany" />
        <p>Deutsch</p>
      </router-link>
      <router-link to="/feed" class="heart-item">
        <img src="../assets/south-korea.svg" alt="South Corea" />
        <p>한국어</p>
      </router-link>
      <router-link to="/feed" class="heart-item">
        <img src="../assets/france.svg" alt="France" />
        <p>Français</p>
      </router-link>
    </div>
    <div class="group fourth">
      <router-link to="/feed" class="heart-item">
        <img src="../assets/italy.svg" alt="Italy" />
        <p>Italiano</p>
      </router-link>
      <router-link to="/feed" class="heart-item">
        <img src="../assets/spain.svg" alt="Spain" />
        <p>Español</p>
      </router-link>
    </div>
    <div class="group fifth">
      <router-link to="/feed" class="heart-item">
        <img src="../assets/netherlands.svg" alt="Netherlands" />
        <p>Nederlands</p>
      </router-link>
      <router-link to="/feed" class="heart-item">
        <img src="../assets/portugal.svg" alt="Portugal" />
        <p>Português</p>
      </router-link>
    </div>
    <div class="group sixth">
      <router-link to="/feed" class="heart-item">
        <img src="../assets/finland.svg" alt="Finland" />
        <p>Suomi</p>
      </router-link>
      <router-link to="/feed" class="heart-item">
        <img src="../assets/denmark.svg" alt="Denmark" />
        <p>Dansk</p>
      </router-link>
    </div>
    <div class="group last">
      <router-link to="/feed" class="heart-item">
        <img src="../assets/turkey.svg" alt="Turkey" />
        <p>Türkçe</p>
      </router-link>
      <router-link to="/feed" class="heart-item">
        <img src="../assets/algeria.svg" alt="Algeria" />
        <p>العربية</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.container {
  max-width: 400px;
  width: 100%;
  z-index: 1;
}

.heart-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  transition: all 0.2s ease;
}

.heart-item p {
  font-size: 14px;
}

.heart-item:hover {
  opacity: 0.5;
  transform: scale(0.8);
}

.group:not(:first-child) {
  margin-top: 25px;
}

.group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.group.first {
  padding-left: 73px;
  padding-right: 73px;
}

.group.second {
  padding-left: 10px;
  padding-right: 10px;
}

.group.third {
  padding-left: 0;
  padding-right: 0;
}

.group.fourth {
  padding-left: 15px;
  padding-right: 15px;
}
.group.fifth {
  padding-left: 45px;
  padding-right: 45px;
}
.group.sixth {
  justify-content: center;
  gap: 70px;
}
.group.last {
  justify-content: center;
  gap: 22px;
}

@media (max-width: 405px) {
  .group:not(:first-child) {
    margin-top: 15px;
  }
  .heart-item p {
    font-size: 12px;
  }

  .heart-item img {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 360px) {
  .group.sixth {
    justify-content: center;
    gap: 50px;
  }

  .heart-item p {
    font-size: 13px;
  }

  .heart-item img {
    width: 24px;
    height: 24px;
  }
}
</style>
