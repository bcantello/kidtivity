import axios from 'axios'

const api = axios.create({
	baseURL: "https://kidtivity.herokuapp.com/"
});

export const createUser = async (user) => {
	try {
		return await api.post('/auth/users/register/', user)
	}
	catch (err) {
		return err
	}
}

export const verifyUser = async (user) => {
	try {
		return await api.post(`/auth/users/login/`, user);
	}
	catch (err) {
		return err
	}
};
