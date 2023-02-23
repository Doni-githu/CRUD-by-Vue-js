<template>
    <div class="search">
        <div class="search-conteiner">
            <Input placeholder="Nimani izlamoqchisiz?" v-model="term" @input="getInputPanel" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        upDateFilterHandler: {
            type: Function,
            required: true,
        }
    },
    data() {
        return {
            term: ''
        }
    },
    methods: {
        getInputPanel(e) {
            this.term = e.target.value
            this.upDateFilterHandler(this.term)
        }
    }
}
</script>
<style scoped>
.search {
    width: 100%;
}
.search .search-conteiner{
    width: 40%;
    margin: 0 auto;
}
</style>