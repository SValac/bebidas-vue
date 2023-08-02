import { computed, onMounted, reactive, ref } from "vue";
import { defineStore } from "pinia";
import { useModalStore } from "./modal";
import APIService from "../services/APIService";


export const useBebidasStore = defineStore( 'bebidas', () => {
        const modal = useModalStore()
        const categorias = ref([])
        const recetas = ref([])
        const busqueda = reactive({
            nombre: '',
            categoria: '',
        })
        const receta = ref({})

        onMounted( async function() {
            const {data: {drinks}} = await APIService.obtenerCategorias()
            categorias.value = drinks
        })

        async function obtenerRecetas() {
            const {data: {drinks}} = await APIService.buscarRecetas(busqueda)
            recetas.value = drinks
        }

        async function verReceta(id){
            const {data: {drinks}} = await APIService.verReceta(id)
            receta.value = drinks[0]
            modal.handleClickModal()
        }

        const noRecetas = computed(() => recetas.value.length === 0)

        return{
            categorias,
            busqueda,
            recetas,
            receta,
            noRecetas,
            obtenerRecetas,
            verReceta,
        }
    }
)