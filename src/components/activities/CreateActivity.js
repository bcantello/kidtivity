import React, {useContext, useState} from "react";
import {createActivity} from "../services/api-helper"
import {UniversalContext} from "../../App";
import CloudinaryUpload from "../imageUpload/CloudinaryUpload";

export default function CreateActivity(props) {
	const universalContext = useContext(UniversalContext);
	const [activityImage, setActivityImage] = useState([]);
	const [newActivity, setNewActivity] = useState({
		title: "",
		category: "",
		age_range: "",
		summary: "",
		supplies: "",
		body: "",
		image: activityImage,
		is_public: "True",
	});
	console.log(newActivity);
	console.log(activityImage);

	const handleChange = (e) => {
		const value = e.target.value
		setNewActivity({...newActivity, [e.target.name]: value});
	};

	const handleChangePicture = e => {
		console.log('picture: ', activityImage);
		setActivityImage([...activityImage, e.target.files[0]]);
		setNewActivity({...newActivity, image: activityImage})
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createActivity(newActivity, universalContext.userInfo.token).then(response => {
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
					<form onSubmit={handleSubmit} className="creat-activity-form">
						<input className="create-activity-Input"
						       type="text"
						       name="title"
						       placeholder="TITLE"
						       value={newActivity.title}
						       onChange={handleChange} required
						/>
						<input className="create-activity-Input"
						       type="text"
						       name="category"
						       placeholder="CATEGORY"
						       value={newActivity.category}
						       onChange={handleChange} required
						/>
						<input className="create-activity-Input"
						       type="text"
						       name="age_range"
						       placeholder="AGE RANGE"
						       value={newActivity.age_range}
						       onChange={handleChange} required
						/>
						<textarea className="create-activity-Input"
						          name="summary"
						          placeholder="SUMMARY"
						          value={newActivity.summary}
						          onChange={handleChange} required
						/>
						<textarea className="create-activity-Input"
						          name="supplies"
						          placeholder="SUPPLIES"
						          value={newActivity.supplies}
						          onChange={handleChange} required
						/>
						<textarea className="create-activity-Input"
						          name="body"
						          placeholder="BODY"
						          value={newActivity.body}
						          onChange={handleChange} required
						/>
						{/*<input className="create-active-Input"*/}
						{/*       type="file"*/}
						{/*       name="image"*/}
						{/*       placeholder="IMAGE"*/}
						{/*       // value={newActivity.image}*/}
						{/*       onChange={e => handleChangePicture(e)}*/}
						{/*/>*/}
						<CloudinaryUpload/>
						<button className="create-activity-form-button" type="submit">submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};
