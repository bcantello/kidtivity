import axios from 'axios'

const api = axios.create({
	baseURL: "https://kidtivity.herokuapp.com/"
});

export const createUser = async (user) => {
	return await api.post('auth/users/register/', user)
}
