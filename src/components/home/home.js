import React from "react";

export default function Home() {
	return<>
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
					<a className="text-muted" href="#">Contribute</a>
				</div>
				<div className="col-4 text-center">
					<a className="blog-header-logo text-dark" href="#">Kidtivity</a>
				</div>
				<div className="col-4 d-flex justify-content-end align-items-center">
					<a className="text-muted" href="#" aria-label="Search">
						<svg xmlns="http://www.w3.org/2000/svg"
						     width="20"
						     height="20"
						     fill="none"
						     stroke="currentColor"
						     strokeLinecap="round"
						     strokeLinejoin="round"
						     strokeWidth="2"
						     className="mx-3"
						     role="img"
						     viewBox="0 0 24 24"
						     focusable="false">
							<title>Search</title>
							<circle cx="10.5" cy="10.5" r="7.5"/>
							<path d="M21 21l-5.2-5.2"/>
						</svg>
					</a>
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
				<h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
				<p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
				<p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
			</div>
		</div>

		<div className="row mb-2">
			<div className="col-md-6">
				<div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
					<div className="col p-4 d-flex flex-column position-static">
						<strong className="d-inline-block mb-2 text-primary">Art</strong>
						<h3 className="mb-0">Featured post</h3>
						<div className="mb-1 text-muted">Nov 12</div>
						<p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
						<a href="#" className="stretched-link">Continue reading</a>
					</div>
					<div className="col-auto d-none d-lg-block">
						<svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
					</div>
				</div>
			</div>
			<div className="col-md-6">
				<div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
					<div className="col p-4 d-flex flex-column position-static">
						<strong className="d-inline-block mb-2 text-success">Educational</strong>
						<h3 className="mb-0">Post title</h3>
						<div className="mb-1 text-muted">Nov 11</div>
						<p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
						<a href="#" className="stretched-link">Continue reading</a>
					</div>
					<div className="col-auto d-none d-lg-block">
						<svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
					</div>
				</div>
			</div>
			<div className="col-md-6">
				<div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
					<div className="col p-4 d-flex flex-column position-static">
						<strong className="d-inline-block mb-2 text-success">Science</strong>
						<h3 className="mb-0">Post title</h3>
						<div className="mb-1 text-muted">Nov 11</div>
						<p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
						<a href="#" className="stretched-link">Continue reading</a>
					</div>
					<div className="col-auto d-none d-lg-block">
						<svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
					</div>
				</div>
			</div>
			<div className="col-md-6">
				<div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
					<div className="col p-4 d-flex flex-column position-static">
						<strong className="d-inline-block mb-2 text-success">Educational</strong>
						<h3 className="mb-0">Post title</h3>
						<div className="mb-1 text-muted">Nov 11</div>
						<p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
						<a href="#" className="stretched-link">Continue reading</a>
					</div>
					<div className="col-auto d-none d-lg-block">
						<svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
					</div>
				</div>
			</div>
		</div>
	</div>

	<main role="main" className="container">
		<nav className="blog-pagination">
			<a className="btn btn-outline-primary" href="#">Older</a>
			<a className="btn btn-outline-secondary disabled" href="#" tabIndex="-1" aria-disabled="true">Newer</a>
		</nav>
	</main>

	<footer className="blog-footer">
		<p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
		<p>
			<a href="#">Back to top</a>
		</p>
	</footer>
</>
};
