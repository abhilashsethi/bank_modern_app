import { stats } from "../constants";
import styles from "../style";
const Stats = () => {
	return (
		<section
			className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 ml-12 mr-12`}
		>
			{stats.map((stat, index) => {
				return (
					<div
						key={stat.id}
						className={`flex-1 flex justify-start items-center flex-row m-3`}
					>
						<h4 className="font-poppins font-semibold xs:text-4xl text-4xl xs:leading-[60px] leading-10 text-white">
							{stat.value}
						</h4>
						<p className="font-poppins font-normal xs:text-base text-base xs:leading-[26.58px] leading-5 text-gradient uppercase ml-3">
							{stat.title}
						</p>
						{index !== stats.length - 1 ? (
							<span className="w-[1.5px] h-4 bg-white opacity-50 text-xl hidden md:flex md:ml-20"></span>
						) : (
							""
						)}
					</div>
				);
			})}
		</section>
	);
};

export default Stats;
