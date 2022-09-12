import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
	return (
		<section className={`${layout.section} ml-10 mr-10`}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					A 360° <br className="sm:block hidden" /> teaching + learning system
				</h2>
				<p className={`${styles.paragraph} max-w-md mt-5`}>
					Concepts are explained by expert teacher with the help of rich visuals
					and storytelling.
				</p>
				<p className="font-poppins font-normal text-dimWhite text-lg leading-7 max-w-md">
					Concepts are explained by expert teacher with the help of rich visuals
					and storytelling
				</p>
				<p className="font-poppins font-normal text-dimWhite text-lg leading-7 max-w-md">
					Concepts are explained by expert teacher with the help of rich visuals
					and other technologies
				</p>
				<Button styles={`mt-10`} />
			</div>
			{/* "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]" */}
			<div className={layout.sectionImg}>
				<img src={card} alt="card" className={`w-full h-full`} />
			</div>
		</section>
	);
};

export default CardDeal;
