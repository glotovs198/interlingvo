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
  max-width: 370px;
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

.heart-item:hover {
  opacity: 0.5;
  transform: scale(0.8);
}

.group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.group.first {
  padding-left: 84px;
  padding-right: 73px;
}

.group.second {
  margin-top: 25px;
  padding-left: 27px;
  padding-right: 27px;
}

.group.third {
  margin-top: 25px;
}

.group.fourth {
  margin-top: 20px;
  padding-left: 29px;
  padding-right: 29px;
}
.group.fifth {
  margin-top: 25px;
  padding-left: 35px;
  padding-right: 35px;
}
.group.sixth {
  padding-left: 102px;
  padding-right: 102px;
  margin-top: 25px;
}
.group.last {
  justify-content: center;
  gap: 22px;
  margin-top: 25px;
}
</style>
