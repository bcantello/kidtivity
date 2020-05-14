import React, {useContext} from "react";
import {createActivity} from "../services/api-helper"
import {UniversalContext} from "../../App";
import CloudinaryUpload from "../imageUpload/CloudinaryUpload";
import './createActivity.css'
import Header from "../header/header";

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
			<div className={'create-header'}>
				<Header/>
			</div>
			<div className="create-activity-wrapper">
				<div className="create-activity-container">
					<div className="create-activity"><h1>create activity</h1></div>
					<form className="create-activity-form">
						<input className="create-activity-Input"
						       type="text"
						       name="title"
						       placeholder="TITLE"
						       maxLength={50}
						       value={universalContext.newActivity.title}
						       onChange={universalContext.handleChange} required
						/>
						<select className="create-activity-Input"
						        name="category"
						        placeholder="CATEGORY"
						        value={universalContext.newActivity.category}
						        onChange={universalContext.handleChange} required>
							<option value={"category"}>Select an activity category</option>
							<option value={"Art"}>Art</option>
							<option value={"Developmental"}>Developmental</option>
							<option value={"Educational"}>Educational</option>
							<option value={"Science"}>Science</option>
							<option value={"Games"}>Games</option>
						</select>
						<select className="create-activity-Input"
						        name="age_range"
						        placeholder="AGE RANGE"
						        value={universalContext.newActivity.age_range}
						        onChange={universalContext.handleChange} required>
							<option value={"Age"}>Select an activity age</option>
							<option value={"Infant"}>Infant</option>
							<option value={"Toddler"}>Toddler</option>
							<option value={"Kindergarten"}>Kindergarten</option>
							<option value={"First-Grade"}>First-Grade</option>
							<option value={"Second-Grade"}>Second-Grade</option>
							<option value={"Third-Grade"}>Third-Grade</option>
							<option value={"Fourth-Grade"}>Fourth-Grade</option>
							<option value={"Fifth-Grade"}>Fifth-Grade</option>
							<option value={"Sixth-Grade"}>Sixth-Grade</option>
						</select>
						<textarea className="create-activity-Input"
						          name="summary"
						          maxLength={160}
						          placeholder="SUMMARY"
						          value={universalContext.newActivity.summary}
						          onChange={universalContext.handleChange} required
						/>
						<textarea className="create-activity-Input"
						          name="supplies"
						          maxLength={300}
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
					</form>
					<CloudinaryUpload/>
					<button className="create-activity-form-button" onClick={handleSubmit}>submit</button>
				</div>
			</div>
		</div>
	);
};
