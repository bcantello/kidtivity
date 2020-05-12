import React, {useState, useEffect} from 'react';
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../services/CloudinaryServices";
import './CloudinaryUpload.css'

export default function CloudinaryUpload() {
	const [images, setImages] = useState([])

	const beginUpload = tag => {
		const uploadOptions = {
			cloudName: "bcantello",
			tags: [tag, 'anImage'],
			uploadPreset: "ahlxmt3p"
		};
		openUploadWidget(uploadOptions, (error, photos) => {
			if (!error) {
				console.log(photos);
				if (photos.event === 'success') {
					setImages([...images, photos.info.public_id])
				}
			} else {
				console.log(error);
			}
		});
	};
	useEffect(() => {
		fetchPhotos("image", setImages);
	}, [])

	return (
		<CloudinaryContext cloudName="bcantello">
			<div className="App">
				<button onClick={() => beginUpload("image")}>Upload Image</button>
				<section className="cloudinary-image-container">
					{images.map(i => <Image
						key={i}
						publicId={i}
						fetch-format="auto"
						quality="auto"
					/>)}
				</section>
			</div>
		</CloudinaryContext>
	);
};
