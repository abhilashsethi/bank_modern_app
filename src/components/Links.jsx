import React from "react";
import styles from "../style";

const Links = ({ id, img, desc }) => {
	return (
		<a href="#">
			<div className="bg-slate-600 rounded-2xl flex gap-5 w-60 h-24 justify-center items-center ease-in duration-300 hover:bg-secondary">
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
