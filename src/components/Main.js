import React from "react";
import {Route, Switch, Redirect} from 'react-router';
import Home from "./home/home";
import SignUp from "./authentication/SignUp";
import Login from "./authentication/Login";

export default function Main() {
	return(
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route path="/signup" component={SignUp}/>
			{/*<Route exact path="/our-team" component={About} />*/}
			<Redirect to='/home' />
		</Switch>
	)
};
