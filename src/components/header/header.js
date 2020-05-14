import React from "react";

export default function Header() {
	return (
		<header className="blog-header py-3">
				<a className="btn btn-sm btn-outline-secondary" href="/home">Home</a>
				<a className="btn btn-sm btn-outline-secondary" href="/login">Log in</a>
				<a className="btn btn-sm btn-outline-secondary" href="/signup">Sign up</a>
				<a className="btn btn-sm btn-outline-secondary" href="/create-activity">Post activity</a>
		</header>
	);
};
