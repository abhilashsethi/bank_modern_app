import styles from "../style";

const ContactUs = () => {
	return (
		<section
			className={` ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow ml-10 mr-10`}
		>
			<div className="flex-1 flex flex-col">
				<h2 className={`${styles.heading2}`}>Contact Us</h2>
			</div>
			<div className="flex flex-col gap-3 mb-3 ">
				<input
					className="w-full p-2 rounded-xl bg-slate-600 hover:bg-[#4cd2dd] ease-in-out duration-300"
					type="text"
					name=""
					id=""
					placeholder="Enter Your Name"
				/>
				<input
					className="w-full p-2 rounded-xl bg-slate-600 hover:bg-[#4cd2dd] ease-in-out duration-300"
					type="text"
					name=""
					id=""
					placeholder="Enter Your Email"
				/>
				<input
					className="w-full p-2 rounded-xl bg-slate-600 hover:bg-[#4cd2dd] ease-in-out duration-300"
					type="text"
					name=""
					id=""
					placeholder="Enter Your Message"
				/>
			</div>
			<button
				type="button"
				className={`py-2 px-6 bg-[#4cd2dd] font-poppins font-medium text-lg text-primary outline-none rounded-lg hover:bg-slate-600 ease-in-out duration-300`}
			>
				Submit
			</button>
		</section>
	);
};

export default ContactUs;
