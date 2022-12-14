import styles from "./style";
import {
	Billing,
	Business,
	CardDeal,
	Clients,
	CTA,
	Footer,
	Navbar,
	Stats,
	Testimonials,
	Home,
	ContactUs,
} from "./components";

const App = () => {
	return (
		<div className="bg-primary w-full">
			{/* ------Navbar Section--------- */}
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			{/* ------Hero Section--------- */}
			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Home />
				</div>
			</div>

			{/* ------Features Section--------- */}
			<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Stats />
					<Business />
					<Billing />
					<CardDeal />
					<Testimonials />
					<Clients />
					<CTA />
					<ContactUs />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
