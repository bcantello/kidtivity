import axios from 'axios'

const api = axios.create({
	baseURL: "https://kidtivity.herokuapp.com/"
	// baseURL: "http://127.0.0.1:8000/"
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

export const createActivity = async (activity, token) => {
	try {
		return await api.post(`/activities/activities/`, activity, {
			headers: {
				authorization: 'JWT ' + token
			}
		});
	}
	catch (err) {
		console.log(err)
		return err
	}
};

export const getPublicActivities = async () => {
	try {
		return await api.get('/activities/public-activities/');
	}
	catch (e) {
		console.log(e)
		return e
	}
}
