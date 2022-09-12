import styles from "../style";
import Button from "./Button";
import Links from "./Links";
import { links } from "../constants";

const CTA = () => {
	return (
		<section
			className={` ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow ml-10 mr-10`}
		>
			<div className="flex-1 flex flex-col">
				<h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>
			<div
				className={`${styles.flexCenter} flex-wrap md:flex-row gap-3 mt-0 md:mt-10`}
			>
				{links.map((link) => (
					<Links key={link.id} {...link} />
				))}
			</div>
		</section>
	);
};

export default CTA;
