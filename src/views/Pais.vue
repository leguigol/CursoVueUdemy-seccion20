<template>
  <!-- <h1>Detalle de Pais: {{ $route.params.nombre }} </h1> -->
  <h1>Detalle de Pais: {{ nombre }} </h1>
  <p v-for="(pais, index) in arrayData" :key="index">
    {{ pais.name.common }} - {{ pais.region }}
  </p>
</template>

<script>
import { useFetch } from '@/hooks/useFetch'
import {useRoute} from 'vue-router'

export default {
    props: ['nombre'],
    setup(props){
        //console.log(props.nombre)
        const nombreParams=useRoute()
        //console.log(nombreParams.params.nombre)
 
        const {arrayData}= useFetch(`https://restcountries.com/v3.1/name/${nombreParams.params.nombre}`)

        return {arrayData}
    }
}
</script>

<style>

</style>