// import { microsoft } from "../assets";
import React from "react";

const Links = ({ id, img, desc }) => {
	return (
		<a href="#">
			<div className="bg-blue-gradient rounded-2xl flex gap-5 w-60 h-24 justify-center items-center ease-in duration-300">
				<img src={img} alt="" className="w-10 h-10" />
				<div className="flex flex-col">
					<strong>{id}</strong>
					<span>{desc}</span>
				</div>
			</div>
		</a>
	);
};

export default Links;
