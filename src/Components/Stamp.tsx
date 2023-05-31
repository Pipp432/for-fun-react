import { useContext, useEffect, useState } from "react";
import { SwipeContext } from "./SwiperContext";
import { SwipeStateType } from "../types";

const Stamp = () => {
	const swipeState: SwipeStateType = useContext(SwipeContext);
	const [style, setStyle] = useState("");
	const [text, setText] = useState("");
	useEffect(() => {
		switch (swipeState.hovered) {
			case "yes": {
				setStyle(
					"z-10 border-[6px] absolute rounded-lg border-green-600 text-green-600 text-[2.75rem] px-2 h-16 text-center flex items-center justify-center rotate-[30deg] translate-y-32  translate-x-48 animate-fadeIn"
				);
				setText("LIKE");
				break;
			}
			case "no": {
				setStyle(
					" z-10 border-[6px] absolute rounded-lg border-red-500 text-red-500 text-[2.75rem] px-2 h-16 text-center flex items-center justify-center -rotate-[30deg] translate-y-36 -translate-x-44  -translate-x-3 animate-fadeIn"
				);
				setText("DISLIKE");
				break;
			}
			case "super": {
				setStyle(
					"z-10 border-[6px] absolute rounded-lg border-sky-500 text-sky-500 text-[2.75rem]  px-2 h-16 text-center flex items-center justify-center rotate-[30deg] translate-y-44 -translate-x-3 animate-fadeIn"
				);
				setText("SUPERLIKE");
				break;
			}
		}
	}, [swipeState.hovered]);

	return <div className={style}>{text}</div>;
};

export default Stamp;
