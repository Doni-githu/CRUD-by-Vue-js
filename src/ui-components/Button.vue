<template>
    <button class="btn btn-dark">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "Button",
}
</script>
<style>
.btn:hover{ 
    opacity: 0.5;
}
</style>