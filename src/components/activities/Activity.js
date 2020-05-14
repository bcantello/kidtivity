import React, {useEffect, useState} from "react";
import {getActivityDetails} from "../services/api-helper";
import './createActivity.css'
import Header from "../header/header";

export default function Activity() {
	const [activityDetail, setActivityDetail] = useState([]);

	useEffect(() => {
		const getActivity = async () => {
			await getActivityDetails(localStorage.getItem("primaryKey")).then(res => {
				if (res.status === 200) {
					setActivityDetail(res.data)
				} else {
					console.log("error retrieving activity details")
				}
			}).catch(e => {
				console.log(e);
			});
		};
		getActivity();
	}, [localStorage.getItem("primaryKey")]);

	return (
		<div id={"activity-details-container"}>
			<Header/>
			<div id={"activity-details-title"}>{activityDetail.title}</div>
			<div id={"activity-details-summary"}>{activityDetail.summary}</div>
			<br/>
			<br/>
			<div id={"activity-details-content-container"}>
				<img src={activityDetail.image} alt={"unable to load activity image"}/>
				<h4 id={"supplies-title"}>Required supplies:</h4>
				<div id={"activity-details-supplies"}>{activityDetail.supplies}</div>
				<h4 id={"body-title"}>Activity:</h4>
				<div id={"activity-details-body"}>{activityDetail.body}</div>
			</div>
		</div>
	);
};