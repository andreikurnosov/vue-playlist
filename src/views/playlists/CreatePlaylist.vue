<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create New Playlsit</h4>
    <input
      type="text"
      name=""
      id=""
      required
      placeholder="Playlist title"
      v-model="title"
    />
    <textarea
      required
      placeholder="Playlist description"
      v-model="description"
    ></textarea>
    <label>Upload playlist cover image</label>
    <input type="file" name="" id="" @change="handleChange" />
    <div class="error">{{ fileError }}</div>
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useStorage from '@/composables/useStorage'

export default {
  setup() {
    const { filePath, url, uploadImage } = useStorage()

    const title = ref('')
    const description = ref('')
    const file = ref(null)
    const fileError = ref(null)

    const types = ['image/png', 'image/jpeg']

    const handleSubmit = async () => {
      if (file.value) {
        await uploadImage(file.value)
        console.log('image uploaded, url: ' + url.value)
      }
    }

    const handleChange = e => {
      const selected = e.target.files[0]

      if (selected && types.includes(selected.type)) {
        file.value = selected
        fileError.value = null
      } else {
        file.value = null
        fileError.value = 'Please selected an image file (png or jpg)'
      }
    }

    return {
      title,
      description,
      handleSubmit,
      handleChange,
      fileError
    }
  }
}
</script>

<style>
form {
  background: white;
}
input[type='file'] {
  border: 0;
  padding: 0;
}
label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>
