import React, {useContext, useEffect, useState} from "react";
import {UniversalContext} from "../../App";
import {getActivityDetails} from "../services/api-helper";

export default function Activity() {
	const universalContext = useContext(UniversalContext);
	const pk = universalContext.primaryKey;
	const [activityDetail, setActivityDetail] = useState([]);

	useEffect(() => {
		const getActivity = async () => {
			await getActivityDetails(pk).then(res => {
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
	}, [pk]);

	return (
		<div id={"activity-details-container"}>
			<div id={"activity-details-title"}>{activityDetail.title}</div>
			<div id={"activity-details-summary"}>{activityDetail.summary}</div>
			<img src={activityDetail.image} alt={"unable to load activity image"}/>
			<div id={"activity-details-supplies"}>{activityDetail.supplies}</div>
			<div id={"activity-details-body"}>{activityDetail.body}</div>
		</div>
	);
};