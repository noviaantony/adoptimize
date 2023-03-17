import axios from "axios";

const PETS_API_URL = "http://localhost:8080/api/v1/AdoptEasy/pet/";

class PetService {
    async getAllPets() {
        const response = await axios.get(PETS_API_URL+"getAllPets");
        return response.data;
    }
    async getPetById(petId) {
        const response = await axios.get(PETS_API_URL+petId);
        return response.data;
    }
}
export default new PetService();