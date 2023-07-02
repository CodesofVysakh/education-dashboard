import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/loader.json";

export default function ButtonLoader() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {},
	};
	return (
		<div className="button-loader">
			<Lottie animationData={animationData} options={defaultOptions} style={{ height: '50px', width: '50px' }} />
		</div>
	);
}
