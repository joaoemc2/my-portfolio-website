import axios from 'axios';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
});

export async function obterGithubRepositories() {
    try {
        const resposta = await githubApi.get('/users/joaoemc2/repos');
        console.log('Resposta:', resposta.data);
        return resposta.data;
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
}