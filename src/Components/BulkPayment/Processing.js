import React, { useEffect } from "react";

const Processing = ({ setProcessed }) => {
	useEffect(() => {
		setTimeout(() => setProcessed(true), 5000);
	}, [setProcessed]);

	return (
		<div className="bg-white profile-details col-lg-10 col-xl-8 min-ht d-flex justify-content-center align-items-center">
			<div className="h-100">
				<div className="bg-success text-center d-flex flex-column justify-content-between align-items-center rounded py-4">
					<svg width="51" height="34" viewBox="0 0 51 34" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							opacity="0.8"
							fillRule="evenodd"
							clipRule="evenodd"
							d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
							fill="white"
						/>
						<path
							opacity="0.8"
							fillRule="evenodd"
							clipRule="evenodd"
							d="M34 34C43.3888 34 51 26.3888 51 17C51 7.61116 43.3888 0 34 0C24.6112 0 17 7.61116 17 17C17 26.3888 24.6112 34 34 34Z"
							fill="white"
						/>
					</svg>
					<svg className="my-3" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							opacity="0.2"
							fillRule="evenodd"
							clipRule="evenodd"
							d="M34.5 67C52.4493 67 67 52.4493 67 34.5C67 16.5507 52.4493 2 34.5 2C16.5507 2 2 16.5507 2 34.5C2 52.4493 16.5507 67 34.5 67Z"
							stroke="white"
							strokeWidth="3"
						/>
						<path
							d="M34.5 67C52.4492 67 67 52.4493 67 34.5C67 16.5507 52.4492 2 34.5 2C28.0791 2 22.093 3.86204 17.0524 7.07559"
							stroke="url(#paint0_linear)"
							strokeWidth="3"
							strokeLinecap="round"
						/>
						<path
							d="M24.5433 29.8182H23.0469L20.5064 31.4787V32.9503L22.9425 31.3594H23.0021V40H24.5433V29.8182ZM31.0173 40.169C33.3689 40.169 34.746 38.25 34.746 34.9141C34.746 31.603 33.349 29.679 31.0173 29.679C28.6807 29.679 27.2886 31.598 27.2836 34.9141C27.2836 38.245 28.6608 40.1641 31.0173 40.169ZM31.0173 38.8416C29.6402 38.8416 28.8099 37.4595 28.8099 34.9141C28.8149 32.3786 29.6452 30.9815 31.0173 30.9815C32.3845 30.9815 33.2197 32.3786 33.2197 34.9141C33.2197 37.4595 32.3895 38.8416 31.0173 38.8416ZM41.9993 38.0909C42.0043 39.2393 42.7252 40.2088 44.0725 40.2088C45.4048 40.2088 46.1357 39.2393 46.1357 38.0909V37.554C46.1357 36.4006 45.4247 35.4361 44.0725 35.4361C42.745 35.4361 42.0043 36.4055 41.9993 37.554V38.0909ZM36.8786 32.2642C36.8786 33.4126 37.6044 34.3821 38.9517 34.3821C40.2791 34.3821 41.0149 33.4176 41.01 32.2642V31.7273C41.0149 30.5739 40.299 29.6094 38.9517 29.6094C37.6293 29.6094 36.8786 30.5739 36.8786 31.7273V32.2642ZM37.2962 40H38.4844L45.4844 29.8182H44.2962L37.2962 40ZM43.1577 37.554C43.1627 36.9822 43.4112 36.4304 44.0725 36.4304C44.7585 36.4304 44.9723 36.9822 44.9723 37.554V38.0909C44.9723 38.6626 44.7387 39.2145 44.0725 39.2145C43.3963 39.2145 43.1627 38.6577 43.1577 38.0909V37.554ZM38.0419 31.7273C38.0419 31.1605 38.2905 30.6037 38.9517 30.6037C39.6378 30.6037 39.8516 31.1555 39.8516 31.7273V32.2642C39.8516 32.8359 39.6179 33.3878 38.9517 33.3878C38.2756 33.3878 38.0419 32.8359 38.0419 32.2642V31.7273Z"
							fill="white"
						/>
						<defs>
							<linearGradient
								id="paint0_linear"
								x1="56.9799"
								y1="55.3322"
								x2="29.3428"
								y2="3.23115"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="white" stopOpacity="0.01" />
								<stop offset="1" stopColor="white" />
							</linearGradient>
						</defs>
					</svg>
					<button className="btn px-5 py-2 bg-transparent text-light sync d-inline-block">Syncing</button>
				</div>
				<p className="text-gray mt-3 text-center">Sometimes, it will take time. So be patient and stay tight.</p>
			</div>
		</div>
	);
};

export default Processing;
