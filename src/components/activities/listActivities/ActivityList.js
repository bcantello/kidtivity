import React, {useContext} from "react";
import ActivityListItem from "./ActivityListItem";
import {UniversalContext} from "../../../App";

export default function ActivitiesList() {
	const universalContext = useContext(UniversalContext);

	const activitiesArr = universalContext.publicActivities.map((e, index) => {
		return (
			<ActivityListItem
				element={e}
				key={index}
			/>
		);
	});

	return (
		<div className="row mb-2">{activitiesArr}</div>
	);
};
