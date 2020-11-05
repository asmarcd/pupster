import axios from "axios"

const API = {
    getRandomDog: function(){
        return axios("https://dog.ceo/api/breeds/image/random")
    },
    getBreedPics: function(breed){
        return axios(`https://dog.ceo/api/breed/${breed}/images`)
    },
    getAllBreeds: function(){
        return axios(`https://dog.ceo/api/breeds/list`)
    }
}

export default API;