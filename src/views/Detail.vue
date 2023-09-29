<script setup>
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { useRoute } from 'vue-router';
import { API_ENDPOINT } from "../config";

const route = useRoute()
const monsterId = route.params.id
const monster = ref()
const isLoaded = ref(false)

onBeforeMount(async () =>{
    const {data} = await axios.get(`${API_ENDPOINT}/monsters/${monsterId}`)
    console.log(data)
    monster.value = data
    isLoaded.value = true
})
</script>

<template>
    <h5 v-if="!isLoaded">Data is loading...</h5>
    <section class="detail-page" v-else>
        <div class="container-fluid d-flex align-items-center justify-content-center pt-3">
            <div class="mx-auto">
                <div class="card border-primary mb-3" style="max-width: 32rem;">
                    <div class="card-header">{{monster._id}}</div>
                    <img :src="monster.image" :alt="monster.name">
                    <div class="card-body text-primary">      
                        <h5 class="card-title">{{monster.name}}</h5>
                        <p class="card-text">{{monster.description}}</p>
                        <ul class="list mt-2">
                            <li v-for="drop in monster.drops"
                                :key="drop">{{ drop }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    </section>
</template>

