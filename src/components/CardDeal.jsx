import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
	return (
		<section className={`${layout.section} ml-10 mr-10`}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Find a better card deal <br className="sm:block hidden" /> in few easy
					steps.
				</h2>
				<p className={`${styles.paragraph} max-w-md mt-5`}>
					Arcus torpor, purus in mattis at sed integer faucibus. Aliquot quic
					aliquot eger maurist torpor.ç Aliquot ultrafiches ac, ametek.
				</p>
				<Button styles={`mt-10`} />
			</div>

			<div className={layout.sectionImg}>
				<img src={card} alt="card" className={`w-full h-full`} />
			</div>
		</section>
	);
};

export default CardDeal;
