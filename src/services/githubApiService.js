import axios from 'axios';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
});

export async function getGithubRepositories() {
    try {
        const resposta = await githubApi.get('/users/joaoemc2/repos');
        return resposta.data;
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
}

export async function getGithubRepositorieLanguages(repo) {
    try {
        const resposta = await githubApi.get(`/repos/joaoemc2/${repo}/languages`);
        return resposta.data;
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
}
