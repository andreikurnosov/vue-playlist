import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const logout = async () => {
  error.value = null
  try {
    await projectAuth.signOut()
  } catch (err) {
    console.error(error.value)
    error.value = err.message
  }
}

const useLogOut = () => {
  return {
    error,
    logout
  }
}

export default useLogOut
