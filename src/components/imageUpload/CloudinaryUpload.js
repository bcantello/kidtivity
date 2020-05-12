import React, {useState, useEffect, useContext} from 'react';
import { CloudinaryContext, Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../services/CloudinaryServices";
import {UniversalContext} from "../../App";
import './CloudinaryUpload.css'

export default function CloudinaryUpload() {
	const universalContext = useContext(UniversalContext)
	const [images, setImages] = useState([])

	const beginUpload = tag => {
		const uploadOptions = {
			cloudName: "bcantello",
			tags: [tag, 'anImage'],
			uploadPreset: "ahlxmt3p"
		};
		openUploadWidget(uploadOptions, (error, photos) => {
			if (!error) {
				console.log("THIS IS PHOTOS: ",photos);
				if (photos.event === 'success') {
					setImages([...images, photos.info.public_id])
				}
				if (photos.info.files) {
					console.log("IM IN THE IF!!!!")
					universalContext.setImageLink(photos.info.files[0]['uploadInfo']['secure_url']);
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
