import React from "react";

export default function ActivityListItem(props) {
	console.log("FROM LIST ITEM: ",props.element)
	return (
		<div className="col-md-6">
			<div
				className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
				<div className="col p-4 d-flex flex-column position-static">
					<strong className="d-inline-block mb-2 text-primary">{props.element.category}</strong>
					<h3 className="mb-0">{props.element.title}</h3>
					<div className="mb-1 text-muted">{props.element['created_at']}</div>
					<p className="card-text mb-auto">{props.element.summary}</p>
					<a href="#" className="stretched-link">Continue reading</a>
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
