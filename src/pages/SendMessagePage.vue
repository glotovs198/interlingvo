<template>
  <main-layout>
    <div class="container">
      <validation-form
        @submit="onSubmit"
        :validation-schema="validationSchema"
        v-slot="{ errors }"
        class="form"
      >
        <p class="red-text">
          Для выполнения этого действия Вам необходимо авторизироваться.
        </p>
        <div class="input-block" :class="{ error: errors.email }">
          <label for="email"
            >{{ errors.email ? errors.email : "Имя пользователя или EMAIL" }}
          </label>
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
        <p>ИЛИ</p>
        <p>
          Укажите Ваше имя пользователя ИЛИ E-mail в поле ниже, если Вы забыли
          Ваше имя пользователя или пароль и Вам необходимо восстановить
          контроль над Вашей учетной записью:
        </p>
        <div class="input-block" :class="{ error: errors.resetPassEmail }">
          <label for="reset-pass-email"
            >{{
              errors.resetPassEmail
                ? errors.resetPassEmail
                : "Имя пользователя или EMAIL"
            }}
          </label>
          <field name="resetPassEmail" id="reset-pass-email" type="text" />
        </div>
        <button class="btn">Далее</button>
      </validation-form>
    </div>
  </main-layout>
</template>

<script>
import { Form as ValidationForm, Field } from "vee-validate";
import { MainLayout } from "../components/layout";
import * as yup from "yup";
export default {
  components: { MainLayout, ValidationForm, Field },
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
      resetPassEmail: yup.string().email("Некорректно введен email"),
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

.red-text {
  color: tomato;
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
