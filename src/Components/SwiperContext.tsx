import { createContext } from "react";
import { SwipeActionType, SwipeStateType } from "../types.ts";
import { useReducer } from "react";

const swipeReducer = (state: SwipeStateType, action: SwipeActionType) => {
	switch (action.type) {
		case "HOVER_YES": {
			return {
				...state,
				hovered: "yes",
				style:
					"w-96 h-[28rem] bg-slate-200 rounded-xl origin-bottom-left duration-200 rotate-12 -translate-y-20 flex justify-end",
			};
		}
		case "UNHOVER": {
			return {
				...state,
				hovered: "non",
				style:
					"w-96 h-[28rem] bg-slate-200 rounded-xl origin-bottom-left duration-200 flex justify-end",
			};
		}
		case "LIKE": {
			state.profiles.shift();
			return {
				...state,

				hovered: "non",
				style:
					"w-96 h-[28rem] bg-slate-200 rounded-xl origin-bottom-left duration-200 flex justify-end",
			};
		}
		case "HOVER_NO": {
			return {
				...state,
				hovered: "no",
				style:
					"w-96 h-[28rem] bg-slate-200 rounded-xl origin-bottom-left duration-200 -rotate-12 flex justify-end",
			};
		}
		case "HOVER_SUPER_LIKE": {
			return {
				...state,
				hovered: "super",
				style:
					"w-96 h-[28rem] bg-slate-200 rounded-xl origin-bottom-right duration-200  -translate-y-10 flex justify-end",
			};
		}
		default:
			return { ...state };
	}
};
export const SwipeContext = createContext({
	hovered: "non",
	style: "",
	profiles: [],
	currentIndex: 0,
});
export const SwipeDispatchContext = createContext(null);
const initialSwipeState = {
	hovered: "non",
	style:
		"w-96 h-[28rem] bg-slate-200 rounded-xl origin-bottom-left duration-200",
	profiles: ["a", "b", "c"],
	currentIndex: 0,
};

export function SwipeContextProvider({ children }: any) {
	const [swipeState, dispatch]: [any, any] = useReducer(
		swipeReducer as any,
		initialSwipeState
	);
	return (
		<SwipeContext.Provider value={swipeState}>
			<SwipeDispatchContext.Provider value={dispatch}>
				{children}
			</SwipeDispatchContext.Provider>
		</SwipeContext.Provider>
	);
}
