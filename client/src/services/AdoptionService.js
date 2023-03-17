import axios from "axios";

const ADOPTION_API_URL = "http://localhost:8080/api/v1/AdoptEasy/adoption/";

class AdoptionService {
    async getAllAdoptions() {
        const response = await axios.get(ADOPTION_API_URL + "getAllAdoptions");
        return response.data;
    }
    async getPetAdoptions(petId) {
        const response = await axios.get(ADOPTION_API_URL+"getAdoptionByPet/"+petId);
        return response.data;
    }
}
export default new AdoptionService();