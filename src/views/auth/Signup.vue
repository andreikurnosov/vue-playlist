<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign up</h3>
        <input type="text" name="" id="" placeholder="Display name" v-model="displayName" />
        <input type="email" name="" id="" placeholder="Email" v-model="email" />
        <input type="password" name="" id="" placeholder="Password" v-model="password" />
        <div class="error" v-if="error">{{ error }}</div>
        <button v-if="!isPending">Sign up</button>
        <button v-if="isPending" disabled>Loading</button>
    </form>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useSignUp from '../../composables/useSignUp'
export default {
    setup() {
        const { signup, error, isPending } = useSignUp()
        const router = useRouter()

        const email = ref('')
        const password = ref('')
        const displayName = ref('')

        const handleSubmit = async () => {
            const res = await signup(email.value, password.value, displayName.value)

            if (!error.value) {
                router.push({ name: 'UserPlaylists' })

            }

        }

        return {
            email,
            error,
            displayName,
            isPending,
            password,
            handleSubmit
        }
    }
}
</script>