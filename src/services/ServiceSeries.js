import axios from 'axios';
import Global from '../Global';

export default class ServiceSeries {

    // Obtengo todas las series
    getSeries() {
        return new Promise((resolve, reject) => {
            let url = Global.urlApi + 'api/Series';

            axios.get(url).then((response) =>{
                console.log( "Leyendo series" );
                resolve(response.data);
            }).catch((error) => {
                console.log("Error, obteniendo las series: " + error);
                reject(error);
            })
        })
    }

    // Obtengo la serie por su ID
    getSerie(id) {
        return new Promise((resolve, reject) => {
            let url = Global.urlApi + 'api/Series/' + id;
    
            axios.get(url).then ((response) => {
                console.log("Obteniendo la serie: " + idSerie);
                resolve(response.data);
            }).catch ((error) => {
                reject(error);
            })
        })
    }

    // Añadir una serie
    insertSerie(serie){
        return new Promise((resolve, reject) => {
            let url = Global.urlApi + 'api/Series';

            axios.post(url, serie)
            .then((response) => {
                console.log ("Añadir la serie")
                resolve(response);
            }).catch ((error) => {
                console.log("Error añadiendo " + error);
                reject(error);
            })
        })
    }

    // Actualizar una serie
    updateSerie(serie) {
        return new Promise((resolve, reject) => {
            let url = Global.urlApi + 'api/Series';

            axios.put(url, serie).then((response) => {
                console.log("Actualiza la serie");
                resolve(response);
            }).catch((error) => {
                console.log("Error actualizando la serie: " + error);
                reject(error);
            })
        })
    }

    // Para eliminar una serie por ID
    deleteSerie (id){
        return new Promise((resolve, reject) => {
            let url = Global.urlApi + 'api/Series' + id;

            axios.delete(url).then((response) => {
                console.log("Serie eliminada: " + idSerie);
                resolve(response);
            }).catch ((error) => {
                reject(error);
            })
        })
    }
}