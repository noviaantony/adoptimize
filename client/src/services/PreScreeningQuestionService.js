import axios from 'axios';

const PRESCREENING_API_URL = 'http://localhost:8080/api/v1/AdoptEasy/PreScreeningQuestionnaire/';
const SETTING_API_URL = 'http://localhost:8080/api/v1/AdoptEasy/ShelterQuestionaireSettings/';

class PreScreeningQuestionService {
    async getPreScreeningQuestionnaire() {
        return await axios.get(PRESCREENING_API_URL+"getAllQuestions");
    }
    async getUserSettings(userId) {
        const response = await axios.get(SETTING_API_URL+"getAllUserSettings?userId="+userId);
        return response.data;
    }
}
export default new PreScreeningQuestionService()
