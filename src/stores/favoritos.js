import { defineStore } from 'pinia'
import { useBebidasStore } from './bebidas'
import { useModalStore } from './modal'
import { useNotificacionStore } from './notificaciones'
import { computed, onMounted, ref, watch } from 'vue'


export const useFavoritosStore = defineStore('favoritos' , () => {

    const bebidas = useBebidasStore()
    const modal = useModalStore()
    const notificaciones = useNotificacionStore()
    const favoritos = ref([])

    onMounted(() => {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })

    watch(favoritos, () => {
        sincronizarFavoritosLocalStorage()
    }, {
        deep: true
    })

    function sincronizarFavoritosLocalStorage() {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    function existeFavorito() {
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
        return favoritosLocalStorage.some(favorito => favorito.idDrink === bebidas.receta.idDrink)
    }

    function eliminarFavorito() {
        favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidas.receta.idDrink)
        notificaciones.mostrar = true
        notificaciones.error = true
        notificaciones.texto = 'Eliminado de Favoritos'
    }

    function agregarFavorito() {
        favoritos.value.push(bebidas.receta)
        notificaciones.mostrar = true
        notificaciones.texto = 'Agregado a Favoritos'
    }

    function handleClickFavoritos() {
        if (existeFavorito()){
            eliminarFavorito()
        }else{
            agregarFavorito()
        }
        modal.modal = false
    }
    
    const noFavoritos = computed(() => favoritos.value.length === 0)

    return {
        favoritos,
        noFavoritos,
        handleClickFavoritos,
        existeFavorito,
    }
})