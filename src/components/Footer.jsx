import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
	return (
		<section
			className={`${styles.flexCenter} ${styles.paddingY}} flex-col ml-10`}
		>
			<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
				<div className="flex-1 flex flex-col justify-start mr-10">
					<img src={logo} alt="hoobank" className="w-64 h-16 object-contain" />
					<p className={`${styles.paragraph} mt-4 max-w-xs`}>
						It is a free education app for both students and teachers.
					</p>
				</div>
				<div className="flex-[1.5] flex flex-row w-full justify-between flex-wrap md:mt-0 mt-10">
					{footerLinks.map((footerLink, index) => (
						<div
							key={index}
							className="flex flex-col ss:my-0 my-4 min-w-[150px]"
						>
							<h4 className="font-poppins font-medium text-lg leading-7 text-white">
								{footerLink.title}
							</h4>
							<ul className="list-none mt-4">
								{footerLink.links.map((link, index) => (
									<li
										key={link.name}
										className={`font-poppins font-normal text-base leading-6 text-dimWhite hover:text-secondary cursor-pointer ${
											index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
										}`}
									>
										{link.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-2 border-t-gray-700">
				<p className="font-poppins font-normal text-lg leading-7 text-white w-full">
					Copyright &#169;{new Date().getFullYear()} HooBank. All Rights
					Reserved.
				</p>
				<div className="w-full flex items-center justify-end gap-6">
					{socialMedia.map((social) => (
						<div
							key={social.id}
							className=" p-1.5 rounded-full border-2 flex items-center justify-center hover:border-secondary hover:transition duration-300 ease-in-out"
						>
							<img
								src={social.icon}
								alt={social.id}
								className={`w-6 h-6 rounded-full object-contain cursor-pointer`}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Footer;
