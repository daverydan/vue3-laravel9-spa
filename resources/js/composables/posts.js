import { ref } from "vue";
import { useRouter } from "vue-router";

export default function usePosts() {
    // const posts = ref([])
    const posts = ref({});
    const router = useRouter();
    const validationErrors = ref({});

    const getPosts = async (
        page = 1,
        category = "",
        order_column = "created_at",
        order_direction = "desc"
    ) => {
        axios
            .get(
                "/api/posts?page=" +
                    page +
                    "&category=" +
                    category +
                    "&order_column=" +
                    order_column +
                    "&order_direction=" +
                    order_direction
            )
            .then((response) => {
                posts.value = response.data;
            })
            .catch((error) => console.log(error));
    };

    const storePost = async (post) => {
        axios
            .post("/api/posts", post)
            .then(() => {
                router.push({ name: "posts.index" });
            })
            .catch((error) => {
                // "?" optional chaining operator = if error.response is null, ignore(prevents an error)
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            });
    };

    return { posts, getPosts, storePost, validationErrors };
}
