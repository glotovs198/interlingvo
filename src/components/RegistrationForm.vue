<template>
  <div class="container">
    <validation-form
      @submit="onSubmit"
      :validation-schema="validationSchema"
      v-slot="{ errors }"
      class="form"
    >
      <div class="input-block" :class="{ error: errors.username }">
        <label for="username"
          >{{ errors.username ? errors.username : "Имя пользователя (логин)" }}
        </label>
        <field name="username" id="username" type="text" />
      </div>
      <div class="input-block" :class="{ error: errors.email }">
        <label for="email">{{ errors.email ? errors.email : "Email" }} </label>
        <field name="email" id="email" type="text" />
      </div>
      <div class="input-block" :class="{ error: errors.password }">
        <label for="password"
          >{{ errors.password ? errors.password : "Пароль" }}
        </label>
        <field name="password" id="password" type="password" />
      </div>
      <div class="input-block">
        <label for="repeat-password">Подтверждение пароля</label>
        <field name="repeat-password" id="repeat-password" type="password" />
      </div>
      <button class="btn">Получить полный доступ</button>
    </validation-form>
  </div>
</template>

<script>
import { Form as ValidationForm, Field } from "vee-validate";
import * as yup from "yup";
export default {
  components: { ValidationForm, Field },
  setup() {
    const onSubmit = () => {
      console.log("submit");
    };
    const validationSchema = yup.object({
      username: yup
        .string()
        .required("Имя пользователя обязательно для ввода")
        .min(6, "Имя пользователя должно содержать минимум 6 символов"),
      email: yup
        .string()
        .required("Email обязателен для ввода")
        .email("Некорректно введен email"),
      password: yup
        .string()
        .required("Пароль обязателен для ввода")
        .min(8, "Пароль должен содержать от 8 символов"),
    });

    return { validationSchema, onSubmit };
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

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-block {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input-block.error input {
  border: 1px solid tomato;
}

.input-block.error label {
  color: tomato;
}

.input-block label {
  font-size: 12px;
}
</style>
