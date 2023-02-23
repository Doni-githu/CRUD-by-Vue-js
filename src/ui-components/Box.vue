<template>
    <div class="Box">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"Box"
}
</script>
<style>
.Box{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>