<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <input type="email" name="" id="" placeholder="Email" v-model="email" />
        <input type="password" name="" id="" placeholder="Password" v-model="password" />
        <div class="error" v-if="error">{{ error }}</div>
        <button v-if="!isPending">Log in</button>
        <button v-if="isPending" disabled>Loading</button>
    </form>
</template>
<script>
import { ref } from 'vue'
import useLogin from '../../composables/useLogin'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const { login, error, isPending } = useLogin()
        const router = useRouter()

        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            const res = await login(email.value, password.value)

            if (!error.value) {
                router.push({ name: 'UserPlaylists' })
            }
        }

        return {
            email,
            error,
            isPending,
            password,
            handleSubmit
        }
    }
}
</script>