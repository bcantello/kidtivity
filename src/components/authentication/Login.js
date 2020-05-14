import React, {useContext, useState} from 'react'
import {Link} from "react-router-dom";
import {UniversalContext} from "../../App";
import {verifyUser} from "../services/api-helper";
import './authentication.css'
import Header from "../header/header";

export default function Login(props) {
	const universalContext = useContext(UniversalContext)
	const [User, setUser] = useState({
		username: "",
		password: "",
	});
	const [error, setError] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'username':
				error.username =
					value.length < 5
						? 'Username must be at least 5 characters long!'
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
		setUser({...User, [name]: value});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await verifyUser(User).then(response => {
			if (response.status === 200) {
				universalContext.setUserInfo(response.data)
				localStorage.setItem('user', JSON.stringify((response.data)))
				props.history.push("/home");
			} else {
				console.log('login error')
			}
		}).catch(error => {
			console.log("registration error", error)
		});
	};

	return (
		<div className="auth-body">
			<div className={'auth-header'}>
				<Header/>
			</div>
			<div className="Login-Container">
				<div className="Login">
					<div className="User-Login"><h1>user login</h1></div>
					<form className="Login-Form" onSubmit={handleSubmit}>
						<input className="Login-Form-Input"
						       type="text"
						       name="username"
						       placeholder="USERNAME"
						       value={User.username}
						       onChange={handleChange} required
						/>
						{error.username.length > 0 &&
						<span className='error'>{error.username}</span>}
						<input className="Login-Form-Input"
						       type="password"
						       name="password"
						       placeholder="PASSWORD"
						       value={User.password}
						       onChange={handleChange} required
						/>
						{error.password.length > 0 &&
						<span className='error'>{error.password}</span>}
						<button className="Login-Form-Button" type="submit">continue</button>
					</form>
					<p className="login-prompt">Don't have an account? <Link to="/signup">Create one!</Link></p>
				</div>
			</div>
		</div>
	)
};
