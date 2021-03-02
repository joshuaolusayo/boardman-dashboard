import React, { useEffect } from "react";
import LayoutNav from "../Reusable/LayoutNav";
import LayoutHeader from "../Reusable/LayoutHeader";
import Overview from "./Overview";
import DisputeDetails from "./DisputeDetails";

const Disputes = (props) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behaviour: "smooth",
		});
	}, [props.location.pathname]);

	return (
		<div>
			<div className="layout dispute">
				<LayoutNav />
				<div className="layout__content">
					<LayoutHeader />
					<Overview />
					<DisputeDetails />
				</div>
			</div>
		</div>
	);
};

export default Disputes;
