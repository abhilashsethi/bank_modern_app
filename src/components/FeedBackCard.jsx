import { quotes } from "../assets";

const FeedBackCard = ({ content, name, title, img }) => {
	return (
		<div className="flex justify-between flex-col px-10 py-12 rounded-2xl max-w-xs md:mr-20 mr-0 feedback-card">
			<img
				src={quotes}
				alt="double_quotes"
				className="w-10 h-7 object-contain"
			/>
			<p className="font-poppins font-normal text-lg leading-8 text-white my-10">
				{content}
			</p>
			<div className="flex flex-row">
				<img src={img} alt={name} className="w-12 h-12 rounded-full" />
				<div className="flex flex-col ml-4">
					<h4 className="font-poppins font-semibold text-xl leading-8 text-white">
						{name}
					</h4>
					<p className="font-poppins font-normal text-base leading-6 text-dimWhite">
						{title}
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeedBackCard;
