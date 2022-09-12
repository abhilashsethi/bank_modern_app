import styles from "../style";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			msg: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.required("Name is required")
				.min(3, "Minimum length of the name should be at least 3 characters"),
			email: Yup.string()
				.required("Email is required")
				.email("Email is not valid"),
			msg: Yup.string()
				.required("Message is required")
				.min(3, "Minimum length of the message should be 3"),
		}),
		onSubmit: (values) => {
			console.log(values);
			formik.resetForm();
		},
	});

	return (
		<section
			className={` ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow ml-10 mr-10`}
		>
			<div className="flex-1 flex flex-col">
				<h2 className={`${styles.heading2}`}>Contact Us</h2>
			</div>
			<div className="flex flex-col gap-3 mb-3 ">
				<label className="text-gray-400 text-sm block" htmlFor="">
					Name:
				</label>
				<input
					className={` ${
						formik?.touched?.name && formik?.errors?.name
							? " border-red-400 text-red-500"
							: "border-gray-400"
					} w-full border-2 bg-slate-600 border-solid rounded-md p-2 placeholder:text-slate-400 text-sm`}
					type="text"
					name="name"
					value={formik?.values?.name}
					placeholder="Enter Your Name"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik?.touched?.name && formik?.errors?.name && (
					<small className="text-red-600">{formik?.errors?.name}</small>
				)}
			</div>
			<div className="my-2 flex flex-col">
				<div className="flex justify-between items-">
					<label className="text-gray-400 text-sm block" htmlFor="">
						Email:
					</label>
				</div>

				<input
					className={` ${
						formik?.touched?.email && formik?.errors?.email
							? "border-red-400 text-red-500"
							: "border-gray-400"
					}w-full bg-slate-600 border-2 border-gray-400 border-solid rounded-md p-2 placeholder:text-slate-400 text-sm`}
					type="email"
					name="email"
					value={formik?.values?.email}
					placeholder="Email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik?.touched?.email && formik?.errors?.email && (
					<small className="text-red-600">{formik?.errors?.email}</small>
				)}
			</div>

			<div className="my-2 flex flex-col">
				<div className="flex justify-between items-">
					<label className="text-gray-400 text-sm block" htmlFor="">
						Message:
					</label>
				</div>

				<input
					className={` ${
						formik?.touched?.msg && formik?.errors?.msg
							? "border-red-400 text-red-500"
							: "border-gray-400"
					}w-full border-2 bg-slate-600 border-gray-400 border-solid rounded-md p-2 placeholder:text-slate-400 text-sm`}
					type="text"
					name="msg"
					value={formik?.values?.msg}
					placeholder="Enter Your Message"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik?.touched?.msg && formik?.errors?.msg && (
					<small className="text-red-600">{formik?.errors?.msg}</small>
				)}
			</div>

			<button
				className=" text-white bg-indigo-500 px-15 py-2 rounded-md shadow hover:shadow-lg hover:shadow-violet-300/100 opacity-95 ease-in duration-200 block w-full mt-5"
				onClick={formik.handleSubmit}
			>
				Contact us
			</button>
		</section>
	);
};

export default ContactUs;
