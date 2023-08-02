<script setup>
import { useBebidasStore } from '../stores/bebidas';
const storeBebidas = useBebidasStore();

const verReceta = (id) => {
    storeBebidas.verReceta(id)
};

defineProps({
    receta: {
        type: Object,
        required: true,
        default: {},
    }
});

</script>

<template>
    <div class="border shadow-lg">
        <div class="overflow-hidden">
            <img 
                :src="receta.strDrinkThumb" 
                :alt="`imagen de ${receta.strDrink}`"
                class="hover:scale-125 hover:rotate-2 transition-transform"
            >
        </div>
        <div class="p-5">
            <h2 class="text-2xl truncate font-extrabold">{{receta.strDrink}}</h2>
            <button
                class="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
                @click="verReceta(receta.idDrink)"
            >Ver Receta</button>
        </div>
    </div> 
</template>

<style>

</style>