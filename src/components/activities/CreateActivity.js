import React, {useContext, useState} from "react";
import {createActivity} from "../services/api-helper"
import {UniversalContext} from "../../App";
import CloudinaryUpload from "../imageUpload/CloudinaryUpload";
import './createActivity.css'
import Header from "../header/header";

export default function CreateActivity(props) {
	const universalContext = useContext(UniversalContext);
	const [error, setError] = useState({
		title: "",
		category: "",
		age_range: "",
		summary: "",
		supplies: "",
		body: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'title':
				error.title =
					value.length < 10
						? 'Title must be at least 10 characters long!'
						: '';
				break;
			case 'category':
				error.category =
					value.length < 14
						? ''
						: 'Please select a valid category';
				break;
			case 'age_range':
				error.age_range =
					value.length < 14
						? ''
						: 'Please select a valid age group';
				break;
			case 'summary':
				error.summary =
					value.length < 40
						? 'Summary must be between 40 and 160 characters'
						: '';
				break;
			case 'supplies':
				error.supplies =
					value.length === 0
						? 'Please list all necessary supplies'
						: '';
				break;
			case 'body':
				error.body =
					value.length < 100
						? 'Activities must contain a body with at least 100 characters'
						: '';
				break;
			default:
				break;
		}
		setError({...error, [value]: name});
		universalContext.setNewActivity({...universalContext.newActivity, [name]: value});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (universalContext.userInfo.token) {
			await createActivity(universalContext.activityPayload, universalContext.userInfo.token).then(response => {
				if (response.status === 201) {
					props.history.push("/home");
				} else {
					document.getElementById('error-response').innerHTML = "Submission failed. Please ensure all fields are filled out correctly"
				}
			}).catch(error => {
				return(error);
			});
		} else {
			document.getElementById('error-response').innerHTML = "You must be logged in to post an activity"
		}
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
						       onChange={handleChange} required
						/>
						{error.title.length > 0 &&
						<span className='error'>{error.title}</span>}
						<select className="create-activity-Input"
						        name="category"
						        placeholder="CATEGORY"
						        value={universalContext.newActivity.category}
								onChange={handleChange} required>
							<option value={"Select an activity category"}>Select an activity category</option>
							<option value={"Art"}>Art</option>
							<option value={"Developmental"}>Developmental</option>
							<option value={"Educational"}>Educational</option>
							<option value={"Science"}>Science</option>
							<option value={"Games"}>Games</option>
						</select>
						{error.category.length > 0 &&
						<span className='error'>{error.category}</span>}
						<select className="create-activity-Input"
						        name="age_range"
						        placeholder="AGE RANGE"
						        value={universalContext.newActivity.age_range}
								onChange={handleChange} required>
							<option value={"Select an activity age"}>Select an activity age</option>
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
						{error.age_range.length > 0 &&
						<span className='error'>{error.age_range}</span>}
						<textarea className="create-activity-Input"
						          name="summary"
						          maxLength={160}
						          placeholder="SUMMARY"
						          value={universalContext.newActivity.summary}
						          onChange={handleChange} required
						/>
						{error.summary.length > 0 &&
						<span className='error'>{error.summary}</span>}
						<textarea className="create-activity-Input"
						          name="supplies"
						          maxLength={300}
						          placeholder="SUPPLIES"
						          value={universalContext.newActivity.supplies}
						          onChange={handleChange} required
						/>
						{error.supplies.length > 0 &&
						<span className='error'>{error.supplies}</span>}
						<textarea className="create-activity-Input"
						          name="body"
						          placeholder="BODY"
						          value={universalContext.newActivity.body}
						          onChange={handleChange} required
						/>
						{error.body.length > 0 &&
						<span className='error'>{error.body}</span>}
					</form>
					<CloudinaryUpload/>
					<button className="create-activity-form-button" onClick={handleSubmit}>submit</button>
					<div id={'error-response'}></div>
				</div>
			</div>
		</div>
	);
};
