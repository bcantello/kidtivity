import React from "react";
import colorlogo from "../../media/colorLogo.png"
import './header.css'

export default function Header() {
	return (
		<header className="blog-header py-3">
			<div className={"header-button-container"}>
				<img src={colorlogo}/>
				<a className="btn btn-sm btn-outline-secondary" href="/home">Home</a>
				<a className="btn btn-sm btn-outline-secondary" href="/login">Log in</a>
				<a className="btn btn-sm btn-outline-secondary" href="/signup">Sign up</a>
				<a className="btn btn-sm btn-outline-secondary" href="/create-activity">Post activity</a>
			</div>
			{/*<img src={colorlogo}/>*/}
		</header>
	);
};
