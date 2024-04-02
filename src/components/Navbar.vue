<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="logo-box">
          <img src="../assets/logo.svg" alt="interlingvo" />
          <h3 class="logo-title">LIFE FOR LOVE</h3>
        </div>
        <languages />
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div class="header-bottom-body">
          <div class="description-box">
            <p>Реальная многоязычность</p>
            <p>
              Простая и удобная система для общения между людьми, говорящими на
              разных языках.
            </p>
          </div>

          <router-link class="link" to="/policy">Подробнее...</router-link>

          <div class="header-bottom-actions">
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
    </div>
  </header>
</template>

<script>
import Languages from "./Languages.vue";
export default {
  components: { Languages },
};
</script>

<style scoped>
.header-top {
  background: #bccbd5;
  padding-top: 23px;
  padding-bottom: 23px;
}

.header-bottom {
  margin-top: 15px;
}

.link {
  font-weight: 600;
  text-decoration: underline;
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

.description-box {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.header-bottom-body {
  display: flex;
  flex-direction: column;
  gap: 19px;
}

.header-bottom-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

@media (max-width: 370px) {
  .logo-title {
    font-size: 22px;
  }
}
</style>
