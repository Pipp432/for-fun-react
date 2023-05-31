import { useContext } from "react";
import Swiper from "./Components/Swiper";
import { SwipeDispatchContext } from "./Components/SwiperContext";

function App() {
	const dispatch: any = useContext(SwipeDispatchContext);
	return (
		<div>
			<div className='flex flex-col absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] gap-10 items-center'>
				<div className='text-[3rem] bold text-white '>Tinder for Engineers</div>
				<Swiper />
				<div className='flex gap-14 items-center'>
					<button
						className='rounded-full w-24 h-24 bg-red-600 hover:scale-110'
						onMouseEnter={() => {
							dispatch({ type: "HOVER_NO" });
						}}
						onMouseLeave={() => {
							dispatch({ type: "UNHOVER" });
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='120'
							height='120'
							fill='white'
							viewBox='0 0 16 16'
							className='-translate-x-3 -translate-y-3'
						>
							<path
								d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
								fill='white'
							></path>
						</svg>
					</button>
					<button
						className='rounded-full w-24 h-24 bg-sky-600 hover:scale-110'
						onMouseEnter={() => {
							dispatch({ type: "HOVER_SUPER_LIKE" });
						}}
						onMouseLeave={() => {
							dispatch({ type: "UNHOVER" });
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='72'
							height='72'
							fill='white'
							viewBox='0 0 16 16'
							className='translate-x-3 translate-y-1'
						>
							<path
								d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z'
								fill='white'
							></path>
						</svg>
					</button>
					<button
						className='rounded-full w-24 h-24 bg-green-600  hover:scale-110'
						onMouseEnter={() => {
							dispatch({ type: "HOVER_YES" });
						}}
						onMouseLeave={() => {
							dispatch({ type: "UNHOVER" });
						}}
						onClick={() => {
							dispatch({ type: "LIKE" });
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='60'
							height='60'
							viewBox='0 0 24 24'
							fill='white'
							className='translate-x-4'
						>
							<path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
