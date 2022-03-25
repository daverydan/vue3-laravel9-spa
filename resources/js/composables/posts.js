import { ref } from "vue";
import { useRouter } from "vue-router";

export default function usePosts() {
    // const posts = ref([])
    const posts = ref({});
    const post = ref({});
    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);

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

    const getPost = async (id) => {
        axios
            .get("/api/posts/" + id)
            .then((response) => {
                post.value = response.data.data;
            })
            .catch((error) => console.log(error));
    };

    const storePost = async (post) => {
        if (isLoading.value) return;
        isLoading.value = true;
        validationErrors.value = {};

        // dealing with image upload
        let serializedPost = new FormData();
        for (let item in post) {
            if (post.hasOwnProperty(item)) {
                serializedPost.append(item, post[item]);
            }
        }

        axios
            .post("/api/posts", serializedPost)
            .then(() => {
                router.push({ name: "posts.index" });
            })
            .catch((error) => {
                // "?" optional chaining operator = if error.response is null, ignore(prevents an error)
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = true));
    };

    const updatePost = async (post) => {
        if (isLoading.value) return;
        isLoading.value = true;
        validationErrors.value = {};

        // dealing with image upload
        // let serializedPost = new FormData();
        // for (let item in post) {
        //     if (post.hasOwnProperty(item)) {
        //         serializedPost.append(item, post[item]);
        //     }
        // }

        axios
            .put("/api/posts/" + post.id, post)
            .then(() => {
                router.push({ name: "posts.index" });
            })
            .catch((error) => {
                // "?" optional chaining operator = if error.response is null, ignore(prevents an error)
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = true));
    };

    return {
        posts,
        post,
        getPosts,
        getPost,
        storePost,
        updatePost,
        validationErrors,
        isLoading,
    };
}
