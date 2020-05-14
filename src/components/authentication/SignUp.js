import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {createUser} from "../services/api-helper";
import {UniversalContext} from "../../App";
import './authentication.css'
import Header from "../header/header";

export default function SignUp(props) {
	const universalContext = useContext(UniversalContext)
	const [newUser, setNewUser] = useState({
		username: "",
		email: "",
		first_name: "",
		last_name: "",
		password: "",
	});
	const [error, setError] = useState({
		username: "",
		email: "",
		first_name: "",
		last_name: "",
		password: "",
	});

	const validEmailRegex =
		RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'username':
				error.username =
					value.length < 5
						? 'Username must be at least 5 characters long!'
						: '';
				break;
			case 'email':
				error.email =
					validEmailRegex.test(value)
						? ''
						: 'This is not a valid email!';
				break;
			case 'first_name':
				error.first_name =
					value.length < 2
						? 'First Name must be greater than 2 letters!'
						: '';
				break;
			case 'last_name':
				error.last_name =
					value.length < 2
						? 'Last Name must be greater than 2 letters!'
						: '';
				break;
			case 'password':
				error.password =
					value.length < 8
						? 'Password must be at least 8 characters long!'
						: '';
				break;
			default:
				break;
		}
		setError({...error, [value]: name});
		setNewUser({...newUser, [name]: value});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createUser(newUser).then(response => {
			console.log(response.status)
			if (response.status === 201) {
				universalContext.setUserInfo(response.data)
				localStorage.setItem('user', JSON.stringify((response.data)))
				props.history.push("/home");
			} else {
				document.getElementById('error-response').innerHTML = "Submission failed. Please ensure all fields are filled out correctly"
			}
		}).catch(error => {
			return(error);
		});
	};

	return(
		<div className="auth-body">
			<div className={'auth-header'}>
				<Header/>
			</div>
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
						{error.username.length > 0 &&
						<span className='error'>{error.username}</span>}
						<input className="SignUp-Form-Input"
						       type="email"
						       name="email"
						       placeholder="EMAIL"
						       value={newUser.email}
						       onChange={handleChange} required
							/>
						{error.email.length > 0 &&
						<span className='error'>{error.email}</span>}
						<input className="SignUp-Form-Input"
						       type="text"
						       name="first_name"
						       placeholder="FIRST NAME"
						       value={newUser.first_name}
						       onChange={handleChange} required
							/>
						{error.first_name.length > 0 &&
						<span className='error'>{error.first_name}</span>}
						<input className="SignUp-Form-Input"
						       type="text"
						       name="last_name"
						       placeholder="LAST NAME"
						       value={newUser.last_name}
						       onChange={handleChange} required
							/>
						{error.last_name.length > 0 &&
						<span className='error'>{error.last_name}</span>}
						<input className="SignUp-Form-Input"
						       type="password"
						       name="password"
						       placeholder="PASSWORD"
						       value={newUser.password}
						       onChange={handleChange} required
							/>
						{error.password.length > 0 &&
						<span className='error'>{error.password}</span>}
						<button className="SignUp-Form-Button" type="submit">register</button>
						<div id={'error-response'}></div>
					</form>
					<p className="login-prompt">Already have an account? <Link to="/login">Log in!</Link></p>
				</div>
			</div>
		</div>
	)
}
