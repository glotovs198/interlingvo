<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-body">
        <div class="description-box">
          <p>Реальная многоязычность</p>
          <p>
            Простая и удобная система для общения между людьми, говорящими на
            разных языках.
          </p>
        </div>
        <router-link class="link" to="/policy">Подробнее...</router-link>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
.footer {
  background: white;
  border-top: 1px solid #dce0e4;
  padding-top: 10px;
  padding-bottom: 10px;
}

.container {
  padding-left: 16px;
  padding-right: 16px;
}

.link {
  font-weight: 600;
  text-decoration: underline;
  margin-top: 10px;
  display: block;
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
</style>
