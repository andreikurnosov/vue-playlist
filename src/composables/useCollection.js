import { ref } from 'vue'
import { projectFireStore } from '../firebase/config'

const useCollection = collection => {
  const error = ref(null)
  const isPending = ref(false)

  const addDoc = async doc => {
    error.value = null
    isPending.value = true

    try {
      const res = await projectFireStore.collection(collection).add(doc)
      isPending.value = false

      return res
    } catch (err) {
      console.error(err.message)
      error.value = err.message
      isPending.value = false
    }
  }

  return { error, addDoc, isPending }
}

export default useCollection
