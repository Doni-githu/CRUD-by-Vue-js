<template>
    <ul class="list-gruop">
        <li v-for="listitem in list" :key="listitem.id">
            <span>{{ listitem.name.slice(0,50) }}</span>
            <br>
            <span>{{ listitem.body.slice(0,150) }}</span>
            <div>
                <button @click="$emit('onRemove', listitem.id)">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        list: {
            type: Array,
            required: true,
        }
    },
}
</script>
<style>
.list-gruop {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.list-gruop li {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.list-gruop li span:first-child {
    font-size: 40px;
}

.list-gruop li span:nth-child(2) {
    font-size: 16px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.list-gruop li div button{
    padding: 0.2rem 1rem;
    border: none;
    background-color: aliceblue;
    color: red;
}
</style>