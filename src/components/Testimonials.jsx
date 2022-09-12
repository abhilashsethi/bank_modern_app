import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedBackCard";

const Testimonials = () => {
	return (
		<section
			id="clients"
			className={`${styles.paddingY} ${styles.flexCenter} flex-col relative ml-10 mr-20`}
		>
			<div className="absolute z-[0] rounded-full blue__gradient" />
			<div className="w-full flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 mr-10 ml-10">
				<h1 className={`${styles.heading2} w-3/5`}>
					What people are <br className="sm:block hidden" /> saying about us
				</h1>

				<p className={`${styles.paragraph} text-left max-w-md`}>
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>
			<div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container">
				{feedback.map((card) => (
					<FeedbackCard key={card.id} {...card} />
				))}
			</div>
		</section>
	);
};

export default Testimonials;
