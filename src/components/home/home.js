import React from "react";
import {Link} from "react-router-dom";
import './home.css'
import ActivityList from "../activities/listActivities/ActivityList";

export default function Home() {
	return<div className="home-container">
	<div>
		<meta charSet="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
		<meta name="description" content=""/>
		<meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors"/>
		<meta name="generator" content="Jekyll v3.8.6"/>
		<title>Blog Template · Bootstrap</title>

		<link rel="canonical" href="https://getbootstrap.com/docs/4.4/examples/blog/"/>

		<link href="/docs/4.4/dist/css/bootstrap.min.css" rel="stylesheet"
		      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
		      crossOrigin="anonymous"/>

		<link rel="apple-touch-icon"
		      href="/docs/4.4/assets/img/favicons/apple-touch-icon.png" sizes="180x180"/>
		<link rel="icon" href="/docs/4.4/assets/img/favicons/favicon-32x32.png"
		      sizes="32x32" type="image/png"/>
		<link rel="icon" href="/docs/4.4/assets/img/favicons/favicon-16x16.png"
		      sizes="16x16" type="image/png"/>
		<link rel="manifest"
		      href="/docs/4.4/assets/img/favicons/manifest.json"/>
		<link rel="mask-icon"
		      href="/docs/4.4/assets/img/favicons/safari-pinned-tab.svg"
		      color="#563d7c"/>
		<link rel="icon"
		      href="/docs/4.4/assets/img/favicons/favicon.ico"/>
		<meta name="msapplication-config"
		      content="/docs/4.4/assets/img/favicons/browserconfig.xml"/>
		<meta name="theme-color" content="#563d7c"/>
	</div>
	<div className="container">
		<header className="blog-header py-3">
			<div className="row flex-nowrap justify-content-between align-items-center">
				<div className="col-4 pt-1">
					<Link className="text-muted" to="/create-activity">Post activity</Link>
				</div>
				<div className="col-4 text-center">
					<a className="blog-header-logo text-dark" href="#"></a>
				</div>
				<div className="col-4 d-flex justify-content-end align-items-center">
					<a className="btn btn-sm btn-outline-secondary" href="/login">Log in</a>
					<a className="btn btn-sm btn-outline-secondary" href="/signup">Sign up</a>
				</div>
			</div>
		</header>

		<div className="nav-scroller py-1 mb-2">
			<nav className="nav d-flex justify-content-between">
				<a className="p-2 text-muted" href="#">Infant</a>
				<a className="p-2 text-muted" href="#">Toddler</a>
				<a className="p-2 text-muted" href="#">Kindergarten</a>
				<a className="p-2 text-muted" href="#">1st Grade</a>
				<a className="p-2 text-muted" href="#">2nd Grade</a>
				<a className="p-2 text-muted" href="#">3rd Grade</a>
				<a className="p-2 text-muted" href="#">4th Grade</a>
				<a className="p-2 text-muted" href="#">5th Grade</a>
				<a className="p-2 text-muted" href="#">6th Grade</a>
			</nav>
		</div>

		<div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
			<div className="col-md-6 px-0">
				<h1 className="display-4 font-italic">Kidtivity</h1>
				<p className="lead my-3">Community generated developmental, learning, and entertaining activities for kids</p>
				{/*<p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>*/}
			</div>
		</div>

		<div className="row mb-2">
			<ActivityList/>
		</div>
	</div>

	<main role="main" className="container">
		<nav className="blog-pagination">
			<a className="btn btn-outline-primary" href="#">Older</a>
			<a className="btn btn-outline-secondary disabled" href="#" tabIndex="-1" aria-disabled="true">Newer</a>
		</nav>
	</main>

	<footer className="blog-footer">
		<p>Designed and built by <a href="http://www.brandoncantello.com/" target="_blank" rel="noopener nofollower noreferrer">Brandon Cantello</a> &copy; 2020</p>
		<p>
			<a href="#">Back to top</a>
		</p>
	</footer>
</div>
};
