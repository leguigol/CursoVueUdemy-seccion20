<template>
    <h1 :style="{'color': color}">Contador: {{ contador }}</h1>
</template>

<script>
import { computed } from 'vue'

export default {
    props: ['contador','color'],
    setup(props){
        const signoPeso=computed(()=>{
            return '$'+props.contador
        })
        return {signoPeso}
    }
}
</script>

<style>

</style>