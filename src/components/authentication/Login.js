import React from 'react'
import {Link} from "react-router-dom";

export default function Login() {
	return (
		<div className="auth-body">
			<div className="Login-Container">
				<div className="Login">
					<div className="User-Login"><h1>user login</h1></div>
					{/*<form className="Login-Form" onSubmit={handleSubmit}>*/}
					<form>
						<input className="Login-Form-Input"
						       type="text"
						       name="username"
						       placeholder="USERNAME"
						       // value={User.username}
						       // onChange={handleChange} required
						/>
						<input className="Login-Form-Input"
						       type="password"
						       name="password"
						       placeholder="PASSWORD"
						       // value={User.password}
						       // onChange={handleChange} required
						/>
						<button className="Login-Form-Button" type="submit">continue</button>
					</form>
					<p className="login-prompt">Don't have an account? <Link to="/signup">Create one!</Link></p>
				</div>
			</div>
		</div>
	)
}
