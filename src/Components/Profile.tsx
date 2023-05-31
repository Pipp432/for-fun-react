import SchoolIcon from "@mui/icons-material/School";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useContext } from "react";
import { SwipeContext } from "./SwiperContext";
import Stamp from "./Stamp";

const Profile = (props: { initialStyle: string; index: number }) => {
	const { style, hovered, currentIndex } = useContext(SwipeContext);
	return (
		<>
			{hovered !== "non" && <Stamp />}
			<div
				className={props.index !== currentIndex ? props.initialStyle : style}
			>
				<div className='flex flex-col w-full'>
					<img
						className='h-80 w-full rounded-t-xl'
						src='https://img.freepik.com/free-photo/young-woman-with-long-straight-hair-studio-portrait-attractive-brunette-girl-fashion-model-wears-black-shirt-anf-jeans-sexy-female-model_186202-7462.jpg?w=2000'
					/>
					<div className='text-3xl p-2 flex flex-col'>
						<span>
							<span className='text-slate-500'>Age</span>, Name
						</span>
					</div>
					<div className='p-2 text-sm'>
						<ul className='flex flex-col gap-2'>
							<li className='flex gap-2'>
								<SchoolIcon className='text-purple-500' />
								Chulalongkorn University
							</li>
							<li className='flex gap-2'>
								<AssignmentIndIcon className='text-purple-500' />
								Student year 3
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
