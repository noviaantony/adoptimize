import axios from 'axios';

const PRESCREENING_API_URL = 'http://localhost:8080/api/v1/AdoptEasy/PreScreeningQuestionnaire/';


class PreScreeningQuestionService {
    getPreScreeningQuestionnaire() {
        return axios.get(PRESCREENING_API_URL+"getAllQuestions");
    }
}
export default new PreScreeningQuestionService()
