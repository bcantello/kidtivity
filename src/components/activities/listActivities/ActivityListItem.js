import React from "react";
import history from "../../../history";

export default function ActivityListItem(props) {
	const handleClick = () => {
		localStorage.setItem('primaryKey', props.element.id)
		history.push("/activity");
	};

	return (
		<div className="col-md-6">
			<div
				className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id={"activity-tile"}>
				<div className="col p-4 d-flex flex-column position-static">
					<strong className="d-inline-block mb-2 text-primary">{props.element['age_range']}</strong>
					<h3 className="mb-0">{props.element.title}</h3>
					<div className="mb-1 text-muted">{props.element.category}</div>
					{/*<br/>*/}
					<p className="card-text mb-auto">{props.element.summary}</p>
					<a onClick={handleClick} className="stretched-link"/>
				</div>
				<div className="col-auto d-none d-lg-block">
					<div>
						<img src={props.element.image}  width="200" height="250" alt={'Unable to load image'}/>
					</div>
				</div>
			</div>
		</div>
	);
};
