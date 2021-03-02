import React, { useEffect } from "react";
import LayoutNav from "../Reusable/LayoutNav";
import LayoutHeader from "../Reusable/LayoutHeader";
import Detail from "./Detail";
// import PaymentHistory from "./PaymentHistory";

const DisputeDetail = (props) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behaviour: "smooth",
		});
	}, [props.location.pathname]);
    
	return (
		<div>
			<div className="layout contact">
				<LayoutNav />
				<div className="layout__content">
					<LayoutHeader />
					<Detail />
					{/* <PaymentHistory /> */}
				</div>
			</div>
		</div>
	);
};

export default DisputeDetail;
