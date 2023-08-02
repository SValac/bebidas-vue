import api from '@/lib/axios'

export default{

    obtenerCategorias() {
        try {
                return api.get('/list.php?c=list')
                
            } catch (error) {
                console.log(error)
            }
    },

    buscarRecetas({nombre, categoria}) {
        try {
            return api.get(`/filter.php?i=${nombre}&c=${categoria}`)
        } catch (error) {
            console.log(error)
        }
    },

    verReceta(id){
        try {
            return api.get(`/lookup.php?i=${id}`)
        } catch (error) {
            console.log(error)
        }
    }


}