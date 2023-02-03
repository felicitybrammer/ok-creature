import http from '../http-common';

const getAllPets = () => {
    return http.get('/pets');
};

const getAllUsers = () => {
    return http.get('/users');
};

const getQuiz = (id, user_id) => {
    return http.get('/quiz/${id}/${user_id}');
};

const createUser = data => {
    return http.post('/users', data);
};

const createQuiz = data => {
    return http.post('/quiz', data);
};

const DataService = {
    getAllPets,
    getAllUsers,
    getQuiz,
    createUser,
    createQuiz
};

export default DataService;

