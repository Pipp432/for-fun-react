import { useContext } from "react";
import Profile from "./Profile";
import { SwipeContext } from "./SwiperContext";

const Swiper = () => {
	const swipeState = useContext(SwipeContext);
	const styleArr: Array<string> = [
		"w-96 h-[28rem] bg-slate-200 rounded-xl origin-bottom-left duration-200",
		"w-96 h-[28rem] bg-slate-300 rounded-xl absolute top-[7.5rem] right-[1.5rem] shadow-xl -z-10",
		"w-96 h-[28rem] bg-slate-400 rounded-xl absolute top-[8rem] right-[2rem] shadow-xl -z-20",
	];

	return (
		<>
			{swipeState.profiles.map((_, index: number) => (
				<Profile initialStyle={styleArr[index]} index={index} />
			))}
		</>
	);
};

export default Swiper;
