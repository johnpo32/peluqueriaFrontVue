import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BootstrapVue3 from 'bootstrap-vue-3'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const firebaseConfig = {
    apiKey: "AIzaSyBEAdxJEEVnpPiYY3gs01PAbphgMKm9wtM",
    authDomain: "test-479f4.firebaseapp.com",
    databaseURL: "https://test-479f4-default-rtdb.firebaseio.com",
    projectId: "test-479f4",
    storageBucket: "test-479f4.appspot.com",
    messagingSenderId: "159232924853",
    appId: "1:159232924853:web:60ed0253e8dbe7db80f2fc"
  };
  

const fire = initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(fire)
app.use(BootstrapVue3)
app.use(VueAxios, axios)
app.mount('#app')
