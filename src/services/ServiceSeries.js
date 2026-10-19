import axios from 'axios';
import Global from '../Global';

export default class ServiceSeries {

    // Obtengo todas las series
    getSeries() {
        return new Promise(function(resolve, reject) {
            let url = Global.urlApiSeries;
            let request = "api/Series";

            axios.get(url + request).then((response) =>{
                console.log( "Leyendo series" );

                resolve(response.data);
            }).catch((error) => {
                console.log("Error, obteniendo las series: " + error);
                reject(error);
            })
        })
    }

    // Obtengo la serie por su ID
    getSerie(idSerie) {
        return new Promise(function (resolve, reject) {
            let url = Global.urlApiSeries;
            let request = "api/Series/FindSeries/" + idSerie;

            axios.get(url + request).then ((response) => {
                console.log("Obteniendo la serie: " + idSerie);
                resolve(response.data);
            }).catch ((error) => {
                reject(error);
            })
        })
    }

    // Añadir una serie
    insertSerie(serie){
        return new Promise(function(resolve, reject) {
            let url = Global.urlApiSeries;
            let request = "api/Series/InsertSerie";

            axios.post(url + request, serie)
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
        return new Promise(function(resolve, reject) {
            let url = Global.urlApiSeries;
            let request = "api/Series/UpdateSerie";

            axios.put(url + request, serie).then((resolve) => {
                console.log("Actualiza la serie");
                resolve(response);
            }).catch((error) => {
                console.log("Error actualizando la serie: " + error);
                reject(error);
            })
        })
    }


}
