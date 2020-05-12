import React, {useContext, useState} from "react";
import {createActivity} from "../services/api-helper"
import {UniversalContext} from "../../App";
import CloudinaryUpload from "../imageUpload/CloudinaryUpload";
import './createActivity.css'

export default function CreateActivity(props) {
	const universalContext = useContext(UniversalContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createActivity(universalContext.activityPayload, universalContext.userInfo.token).then(response => {
			if (response.status === 201) {
				props.history.push("/home");
			}
		}).catch(error => {
			return(error);
		});
	};

	return (
		<div className="auth-body">
			<div className="create-activity-wrapper">
				<div className="create-activity-container">
					<div className="create-activity"><h1>create activity</h1></div>
					<form onSubmit={handleSubmit} className="create-activity-form">
						<CloudinaryUpload/>
						<input className="create-activity-Input"
						       type="text"
						       name="title"
						       placeholder="TITLE"
						       value={universalContext.newActivity.title}
						       onChange={universalContext.handleChange} required
						/>
						<input className="create-activity-Input"
						       type="text"
						       name="category"
						       placeholder="CATEGORY"
						       value={universalContext.newActivity.category}
						       onChange={universalContext.handleChange} required
						/>
						<input className="create-activity-Input"
						       type="text"
						       name="age_range"
						       placeholder="AGE RANGE"
						       value={universalContext.newActivity.age_range}
						       onChange={universalContext.handleChange} required
						/>
						<textarea className="create-activity-Input"
						          name="summary"
						          placeholder="SUMMARY"
						          value={universalContext.newActivity.summary}
						          onChange={universalContext.handleChange} required
						/>
						<textarea className="create-activity-Input"
						          name="supplies"
						          placeholder="SUPPLIES"
						          value={universalContext.newActivity.supplies}
						          onChange={universalContext.handleChange} required
						/>
						<textarea className="create-activity-Input"
						          name="body"
						          placeholder="BODY"
						          value={universalContext.newActivity.body}
						          onChange={universalContext.handleChange} required
						/>
						<button className="create-activity-form-button" type="submit">submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};
