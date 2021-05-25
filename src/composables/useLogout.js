import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const logout = async () => {
  error.value = null
  isPending.value = true
  try {
    await projectAuth.signOut()
    isPending.value = false
  } catch (err) {
    console.error(error.value)
    error.value = err.message
    isPending.value = false
  }
}

const useLogOut = () => {
  return {
    error,
    logout,
    isPending
  }
}

export default useLogOut
