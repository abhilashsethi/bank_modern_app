import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Home = () => {
	return (
		<section id="home" className={`flex md:flex-row flex-col ml-10`}>
			<div
				className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
			>
				<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
					<img src={discount} alt="discount" className="w-8 h-8" />
					<p className={`${styles.paragraph} ml-2`}>
						<span className="text-white">20%</span> Discount For{" "}
						<span className="text-white">1 Month</span> Account
					</p>
				</div>
				<div className="flex flex-row justify-between items-center w-full">
					<h1 className="flex-1 font-poppins font-semibold ss:text-7xl text-5xl text-white ss:leading-[100.8px] leading-[75px]">
						The Next <br className="sm:block hidden" />{" "}
						<span className="text-gradient">Generation</span>{" "}
					</h1>
					<div className="ss:flex hidden md:mr-4 mr-0">
						<GetStarted />
					</div>
				</div>
				<h1 className="font-poppins font-semibold ss:text-6xl text-5xl text-white ss:leading-[100.8px] leading-[75px] w-full">
					Educational App.
				</h1>
				<p className={`${styles.paragraph} max-w-md mt-5`}>
					It is a social learning app for students, teachers, districts, and
					schools. It can be used for communication,polling, assignments/quizzes
					etc. Managing classes is much easier, and students can easily send
					teachers individual messages or materials.
				</p>
			</div>
			<div
				className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
			>
				<img
					src={robot}
					alt="billing"
					className="w-[100%] h-[100%] relative z-[5]"
				/>

				{/* gradient start */}
				<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
				<div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
				<div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
				{/* gradient end */}
			</div>

			<div className={`ss:hidden ${styles.flexCenter}`}>
				<GetStarted />
			</div>
		</section>
	);
};

export default Home;
