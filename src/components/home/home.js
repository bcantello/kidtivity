import React, {useContext} from "react";
import {UniversalContext} from "../../App";
import './home.css'
import ActivityList from "../activities/listActivities/ActivityList";
import Header from "../header/header";
import {getPublicActivities} from "../services/api-helper";
import whitelogo from "../../media/white_logo.png"

export default function Home() {
	const universalContext = useContext(UniversalContext);
	let sortedActivities = [];

	const getActivities = async (age) => {
		await getPublicActivities().then(res => {
			if (res.status === 200) {
				res.data.forEach(e => {
					if (e['age_range'] === age) {
						sortedActivities.push(e);
					}
				});
				universalContext.setPublicActivities(sortedActivities);
			} else {
				console.log("error retrieving public activities")
			}
		}).catch(e => {
			console.log(e);
		});
	};

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
		<Header/>

		<div className="nav-scroller py-1 mb-2">
			<nav className="nav d-flex justify-content-between">
				<a className="p-2 text-muted" onClick={() => window.location.reload(true)}>All ages</a>
				<a className="p-2 text-muted" onClick={() => getActivities('Infant')}>Infant</a>
				<a className="p-2 text-muted" onClick={() => getActivities('Toddler')}>Toddler</a>
				<a className="p-2 text-muted" onClick={() => getActivities('Kindergarten')}>Kindergarten</a>
				<a className="p-2 text-muted" onClick={() => getActivities('First-Grade')}>1st Grade</a>
				<a className="p-2 text-muted" onClick={() => getActivities('Second-Grade')}>2nd Grade</a>
				<a className="p-2 text-muted" onClick={() => getActivities('Third-Grade')}>3rd Grade</a>
				<a className="p-2 text-muted" onClick={() => getActivities('Fourth-Grade')}>4th Grade</a>
				<a className="p-2 text-muted" onClick={() => getActivities('Fifth-Grade')}>5th Grade</a>
				<a className="p-2 text-muted" onClick={() => getActivities('Sixth-Grade')}>6th Grade</a>
			</nav>
		</div>

		{/*<div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">*/}
		<div className="jumbotron p-4 p-md-5 text-white rounded">
			<div className="col-md-6 px-0">
				<h1 className="display-4 font-italic"><img src={whitelogo} id={'banner-logo'}/> Kidtivity</h1>
				<p className="lead my-3">A free to use site for crowd sourcing artistic, developmental, and educational activities for children</p>
			</div>
		</div>

		<div className="row mb-2">
			<ActivityList/>
		</div>
	</div>

	{/*<main role="main" className="container">*/}
	{/*	<nav className="blog-pagination">*/}
	{/*		<a className="btn btn-outline-primary" href="#">Older</a>*/}
	{/*		<a className="btn btn-outline-secondary disabled" href="#" tabIndex="-1" aria-disabled="true">Newer</a>*/}
	{/*	</nav>*/}
	{/*</main>*/}

	<footer className="blog-footer">
		<p>Designed and built by <a href="http://www.brandoncantello.com/" target="_blank" rel="noopener nofollower noreferrer">Brandon Cantello</a> &copy; 2020</p>
		<p>
			<a href="#">Back to top</a>
		</p>
	</footer>
</div>
};
