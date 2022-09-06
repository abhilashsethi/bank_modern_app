import React from "react";

const Button = ({ styles }) => {
	return (
		<button
			type="button"
			className={`py-2 px-3 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
		>
			Get Started
		</button>
	);
};

export default Button;
