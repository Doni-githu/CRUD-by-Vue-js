<template>
    <main>
        <Box>
            <div class="search">
                <SearchPanel :upDateFilterHandler="upDateFilterHandler" />
            </div>
        </Box>
        <div class="Big" v-if="!list.length && !isLoading">
            <p>Hech nima qolmadi</p>
        </div>
        <div class="intel" v-if="isLoading">
            <Loader />
        </div>
        <Box v-else>
            <MovieList :list="onFilterHandler(list, term)" @onRemove="onRemoveHandler" />
        </Box>
        <Box>
            <Pagination>
                <li v-for="pageNumber in totalPages" :key="pageNumber" @click="changePanelHandler(pageNumber)"
                    :class="{ active: pageNumber == page }">
                    <span class="page-link">{{ pageNumber }}</span>
                </li>
            </Pagination>
        </Box>
        <Box>
            <ListAddForm @onAdd="onAddHandler" />
        </Box>
    </main>
</template>
<script>
import MovieList from "../MovieList/MovieList.vue";
import SearchPanel from "../SearchPanel/SearchPanel.vue";
import axios from "axios";
import ListAddForm from "../ListAddForm/ListAddForm.vue";
export default {
    data() {
        return {
            picked: "",
            ChekNames: [],
            list: [],
            term: "",
            isLoading: false,
            limit: 50,
            page: 1,
            totalPages: 0,
        };
    },
    components: {
        MovieList,
        SearchPanel,
        ListAddForm,
    },
    methods: {
        async onAddHandler(item) {
            try {
                const response = await axios.post(
                    "https://jsonplaceholder.typicode.com/comments",
                    item
                );
                this.list.push(response.data);
            } catch (error) {
                alert(error.message);
            }
        },
        async FetchGetInfo() {
            try {
                this.isLoading = true;
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/comments",
                    {
                        params: {
                            _limit: this.limit,
                            _page: this.page,
                        },
                    }
                );
                const newArr = response.data.map((item) => ({
                    name: item.name,
                    body: item.body,
                    id: item.id,
                }));
                this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit);
                this.list = newArr;
            } catch (error) {
                alert(error.message);
            } finally {
                this.isLoading = false;
            }
        },
        changePanelHandler(page) {
            this.page = page;
        },
        onFilterHandler(arr, term) {
            if (term.length == 0) {
                return arr;
            }
            return arr.filter((c) => c.name.toLowerCase().indexOf(term) > -1);
        },
        upDateFilterHandler(term) {
            this.term = term;
        },
        async onRemoveHandler(id) {
            try {
                const response = await axios.delete(
                    `https://jsonplaceholder.typicode.com/comments/${id}`
                );
                console.log(response);
                this.list = this.list.filter((c) => c.id !== id);
            } catch (error) {
                alert(error.message);
            }
        },
    },
    mounted() {
        this.FetchGetInfo();
    },
    watch: {
        page() {
            this.FetchGetInfo();
        },
    },
};
</script>
<style>
.search {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
}

.Big {
    font-size: 40px;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.intel {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
