<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';

</script>

<template>
    <Header/>
    <main>
        <router-view> </router-view>
    </main>
    <Footer />    
</template>

<style scoped>
</style>
