<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" name="" id="" placeholder="Email" v-model="email" />
    <input
      type="password"
      name=""
      id=""
      placeholder="Password"
      v-model="password"
    />
    <div class="error" v-if="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../../composables/useLogin'
export default {
  setup() {
    const { login, error } = useLogin()

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      const res = await login(email.value, password.value)

      if (!error.value) {
        console.log('user loggen in')
      }
    }

    return {
      email,
      password,
      handleSubmit
    }
  }
}
</script>
