<template>
    <input type="text" class="form-control" :value="modelValue" @input="upDateInput">
</template>
<script>
export default {
    name: "Input",
    props: {
        modelValue: [String, Number],
    },
    methods: {
        upDateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
<style scoped>
.inputPanel {
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    outline: 1px solid #000;
    background-color: transparent;
    color: #000;
    transition: all 0.75s;
}

.inputPanel::placeholder {
    color: #000;
}
</style>