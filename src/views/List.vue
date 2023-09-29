<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import { API_ENDPOINT } from '../config';

const monsters = ref([])
const isLoaded = ref(false)
const router = useRouter()
const page = ref(1)
const total = ref(0)
const totalPages = ref(0)

const goToDetail = (id) => {
    router.push({
      name: 'detail',
      params: {
        id: id
      }
    })
  console.log("hey clickage sur" + id)
}

const getMonsters = async () => {
  const {data, status, headers} = await axios.get(`${API_ENDPOINT}/monsters?page=${page.value}&limit=20`)
    if (status===200) {
        monsters.value = data
        isLoaded.value = true
        total.value = headers["x-count"]
        totalPages.value = Math.round(total.value / 20)
        console.log(totalPages.value)
        console.log(data)
        console.log(total.value)
    } else {
        console.error('OUPS :(')
    }
    console.log(monsters)
}

const changePage = (newPage) => {
  page.value = newPage
  getMonsters(page);
}

onBeforeMount(async() => {
  getMonsters();
})

</script>

<template>
  <div class="list-page container">
      <h5 v-if="!isLoaded">Data is loading...</h5>
      <div v-else class="wrapper">
            <div class="row title-section">
                <h2 class="mbr-section-title mbr-fonts-style display-2"><strong>Monsters</strong></h2>
            </div>
            <div class="row justify-content-center">
                <div class="card">
                    <table class="table table-sm">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">actions</th>
                        </tr>
                        </thead>
                        <tbody>
                          <tr v-for="monster in monsters"
                                :key="monster._id">                            
                              <th scope="row">{{ monster._id }}</th>
                              <td>{{monster.name}}</td>
                              <td>{{monster.category}}</td>
                              <td><button type="button" @click="goToDetail(monster._id)" class="btn btn-primary btn-sm m-0">Voir 👀</button></td>
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <nav>
                <ul class="nav">
                    <li v-for="pageNumber in totalPages" class="nav-item">
                      <a @click="changePage(pageNumber)" class="nav-link active">{{ pageNumber }}</a>
                    </li>
                </ul>
            </nav>
        </div>
  </div>
</template>

<style>

</style>
