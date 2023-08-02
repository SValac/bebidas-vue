<script setup>
import { useBebidasStore } from '../stores/bebidas';
import Receta from '../components/Receta.vue'

const storeBebidas = useBebidasStore();



</script>;

<template>
    <h1 class="text-6xl font-extrabold">Recetas</h1>

    <p 
        v-if="storeBebidas.noRecetas"
        class="my-10 text-center text-2xl"
    >No hay Resultados</p>

    <div 
        v-else
        class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 my-10"
    >
        <Receta 
            v-for="receta in storeBebidas.recetas"
            :key="receta.idDrink"
            :receta="receta"
        />
    </div>
</template>

<style>

</style>