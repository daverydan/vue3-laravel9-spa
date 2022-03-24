import { ref } from 'vue'

export default function usePosts() {
  const posts = ref([])

  const getPosts = async () => {
    axios.get('/api/posts')
      .then(response => {
        posts.value = response.data
      })
      .catch(error => console.log(error))
  }

  return { posts, getPosts }
}