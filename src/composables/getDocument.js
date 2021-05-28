import { ref, watchEffect } from 'vue'
import { projectFireStore } from '../firebase/config'

const getDocument = (collection, id) => {
  const document = ref(null)
  const error = ref(null)

  let documentRef = projectFireStore
    .collection(collection).doc(id)

  const unsub = documentRef.onSnapshot(
    doc => {
      if(doc.data() ) {
        document.value = {...doc.data(), id: doc.id}
        error.value = null
      } else {
        error.value = 'that document does not exists 😥'
      }
    },
    err => {
      console.error(err.message)
      error.value = err.message
    }
  )

  watchEffect(onInvalidate => {
    onInvalidate(() => {
      unsub()
    })
  })

  return { document, error }
}

export default getDocument
