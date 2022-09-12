const Button = ({ styles }) => {
	return (
		<button
			type="button"
			className={`py-4 px-6 bg-[#4cd2dd] font-poppins font-medium text-lg text-primary outline-none ${styles} rounded-lg  hover:bg-slate-600 hover:text-white ease-in-out duration-300`}
		>
			{/* <img src={microsoft} alt="apple" /> */}
			Get Started
		</button>
	);
};

export default Button;
