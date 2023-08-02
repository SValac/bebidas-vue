import { defineStore } from  'pinia'
import { useFavoritosStore } from './favoritos'
import { useBebidasStore } from './bebidas'
import { computed, ref } from 'vue'

export const useModalStore = defineStore('modal', () => {

    const favoritos = useFavoritosStore()
    const bebidas = useBebidasStore()
    const modal = ref(false)

    function handleClickModal() {
        modal.value = !modal.value
    }

    const textoBoton = computed(() => {
        return favoritos.existeFavorito(bebidas.receta.idDrink) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'
    })

    return {
        modal,
        handleClickModal,
        textoBoton,
    }
})