<template>
  <div class="container">
    <h1>Пожалуйста, укажите ваш пол</h1>
    <div class="gender-box">
      <div @click="handleComplete" class="gender-box-item">
        <img src="../assets/male.svg" alt="male" />
        <p>Мужской</p>
      </div>
      <div @click="handleComplete" class="gender-box-item">
        <img src="../assets/female.svg" alt="male" />
        <p>Женский</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["completed"],
  setup(_, ctx) {
    const handleComplete = () => {
      ctx.emit("completed");
    };

    return { handleComplete };
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
