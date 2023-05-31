export type SwipeActionType = {
	type: string;
	payload?: any;
};
export type SwipeStateType = {
	hovered: string;
	style: string;
	profiles: Array<string>;
	currentIndex: number;
};
enum Action {
	Increment,
	Decrement,
}
interface ActionObject {
	type: Action;
}
export type DispatchType = React.Dispatch<ActionObject>;
