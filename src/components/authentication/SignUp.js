import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {createUser} from "../services/api-helper";
import {UniversalContext} from "../../App";
import './authentication.css'

export default function SignUp(props) {
	const universalContext = useContext(UniversalContext)
	const [newUser, setNewUser] = useState({
		username: "",
		email: "",
		first_name: "",
		last_name: "",
		password: "",
	});

	const handleChange = (e) => {
		const value = e.target.value
		setNewUser({...newUser, [e.target.name]: value});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createUser(newUser).then(response => {
			console.log(response.status)
			if (response.status === 201) {
				console.log("I'm in here")
				universalContext.setUserInfo(response.data)
				localStorage.setItem('user', JSON.stringify((response.data)))
				props.history.push("/home");
			} else {
				console.log('account creation error')
			}
		}).catch(error => {
			return(error);
		});
	};

	return(
		<div className="auth-body">
			<div className="SignUp-Container">
				<div className="SignUp">
					<div className="Create-Account"><h1>create account</h1></div>
					<form onSubmit={handleSubmit} className="SignUp-Form">
						<input className="SignUp-Form-Input"
						       type="text"
						       name="username"
						       placeholder="USERNAME"
						       value={newUser.username}
						       onChange={handleChange} required
							/>
						<input className="SignUp-Form-Input"
						       type="email"
						       name="email"
						       placeholder="EMAIL"
						       value={newUser.email}
						       onChange={handleChange} required
							/>
						<input className="SignUp-Form-Input"
						       type="text"
						       name="first_name"
						       placeholder="FIRST NAME"
						       value={newUser.first_name}
						       onChange={handleChange} required
							/>
						<input className="SignUp-Form-Input"
						       type="text"
						       name="last_name"
						       placeholder="LAST NAME"
						       value={newUser.last_name}
						       onChange={handleChange} required
							/>
						<input className="SignUp-Form-Input"
						       type="password"
						       name="password"
						       placeholder="PASSWORD"
						       value={newUser.password}
						       onChange={handleChange} required
							/>
						<button className="SignUp-Form-Button" type="submit">register</button>
					</form>
					<p className="login-prompt">Already have an account? <Link to="/login">Log in!</Link></p>
				</div>
			</div>
		</div>
	)
}
