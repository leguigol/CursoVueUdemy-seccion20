<template>
   <h1>Contador: {{ contador }}</h1> 
   <Btn :textoBoton="'Aumentar'" @accion="aumentar"></Btn>
   <Btn :textoBoton="'Disminuir'" @accion="disminuir"></Btn>

</template>

<script>
import Btn from '../components/Btn';
import {useContador} from '../hooks/useContador';

export default {
    components: {
        Btn 
    },
    setup(){
        return{...useContador()}
    }
}
</script>

