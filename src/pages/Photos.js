import React, { useContext } from "react";

import Image from "../components/Image";
//for adjusting image size for grid
import { getClass } from "../utils";
import { Context } from "../Context";

function Photos() {
	const { allPhotos } = useContext(Context);

	const imageElements = allPhotos.map((photo, index) => (
		<Image key={photo.id} img={photo} className={getClass(index)} />
	));

	return <main className="photos">{imageElements}</main>;
}

export default Photos;
