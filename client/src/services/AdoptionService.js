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
    async getAdoptionById(applicationId) {
        const response = await axios.get(ADOPTION_API_URL+"getAdoption/"+applicationId);
        return response.data;
    }
    async startAdoptionProcess(applicationId) {
        const response = await axios.put(ADOPTION_API_URL+"startAdoptionApplication/"+applicationId);
        return response.data;
    }
    async approveAdoptionPhase(applicationId) {
        const response = await axios.put(ADOPTION_API_URL+"approveAdoptionPhase/"+applicationId);
        return response.data;
    }
}
export default new AdoptionService();