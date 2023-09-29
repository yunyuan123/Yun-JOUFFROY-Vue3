<script setup>
    const props = defineProps(['monster'])
    console.log(props.monster)
</script>

<template>
    <div class="card">
        <img :src="monster.image" :alt="monster.name" class="card-img-top">
        <div class="card-body">
            <h3 class="card-title mbr-section-subtitle mbr-fonts-style"><strong>{{ monster.name }}</strong></h3>
            <ul class="list mbr-fonts-style display-7">
                <li>[Drops 1]</li>
                <li>[Drops 2]</li>
                <li>[Drops 3]</li>
            </ul>
            <div class="mbr-section-btn">
                <router-link class="btn btn-primary display-7" :to="{ name: 'detail', params: {id: monster._id } }">VOIR</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
