import { ref } from 'vue'

export default function usePosts() {
  // const posts = ref([])
  const posts = ref({})

  const getPosts = async (page = 1) => {
    axios.get('/api/posts?page=' + page)
      .then(response => {
        posts.value = response.data
      })
      .catch(error => console.log(error))
  }

  return { posts, getPosts }
}