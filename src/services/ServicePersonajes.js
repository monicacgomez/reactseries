import axios from 'axios';
import Global from '../Global';

export default class ServicePersonajes {

    // Obtengo todos los personajes
    getPersonajes() {
        return new Promise((resolve, reject) => {
            let url = Global.urlApi + 'api/Personajes';

            axios.get(url).then((response) =>{
                console.log( "Leyendo personajes" );
                resolve(response.data);
            }).catch((error) => {
                console.log("Error, obteniendo los personajes: " + error);
                reject(error);
            })
        })
    }

    // Obtengo al personaje por su ID
    getPersonaje(id) {
        return new Promise((resolve, reject) => {
            let url = Global.urlApi + 'api/Personajes/' + id;
    
            axios.get(url).then ((response) => {
                console.log("Obteniendo al personaje: " + idPersonaje);
                resolve(response.data);
            }).catch ((error) => {
                reject(error);
            })
        })
    }

    // Añadir un personaje
    insertPersonaje(personaje){
        return new Promise((resolve, reject) => {
            let url = Global.urlApi + 'api/Personajes';

            axios.post(url, personaje)
            .then((response) => {
                console.log ("Añadir un personaje")
                resolve(response);
            }).catch ((error) => {
                console.log("Error añadiendo " + error);
                reject(error);
            })
        })
    }

    // Actualizar un personaje
    updatePersonaje(personaje) {
        return new Promise((resolve, reject) => {
            let url = Global.urlApi + 'api/Personajes';

            axios.put(url, personaje).then((response) => {
                console.log("Actualiza un personaje");
                resolve(response);
            }).catch((error) => {
                console.log("Error actualizando el personaje: " + error);
                reject(error);
            })
        })
    }

    // Para eliminar un personaje por ID
    deletePersonaje (id){
        return new Promise((resolve, reject) => {
            let url = Global.urlApi + 'api/Personajes' + id;

            axios.delete(url).then((response) => {
                console.log("Personaje eliminada: " + idPersonaje);
                resolve(response);
            }).catch ((error) => {
                reject(error);
            })
        })
    }
}