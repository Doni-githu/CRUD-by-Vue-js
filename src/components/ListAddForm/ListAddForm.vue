<template>
    <form @submit.prevent>
        <Input type="text" placeholder="Qoshing" v-model="name" />
        <Input type="text" placeholder="Qoshing" v-model="body" />
        <Button type="submit" @click="upDateForm">Click</Button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            body: '',
        }
    },
    methods: {
        upDateForm() {
            if (!this.name || !this.body) {
                alert("Error")
            }

            const Arr = {
                name: this.name,
                body: this.body,
            }
            this.$emit("onAdd", Arr)
        }
    }
}
</script>
<style>
form {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0;
}
</style>