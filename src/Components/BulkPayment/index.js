import React, { useEffect } from "react";
import LayoutNav from "../Reusable/LayoutNav";
import LayoutHeader from "../Reusable/LayoutHeader";
import CreatePayment from "./CreatePayment";
// import PaymentHistory from "./PaymentHistory";

const BulkPayment = (props) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behaviour: "smooth",
		});
	}, [props.location.pathname]);
	return (
		<div>
			<div className="layout bulk-payment">
				<LayoutNav />
				<div className="layout__content">
					<LayoutHeader />
					<CreatePayment />
				</div>
			</div>
		</div>
	);
};

export default BulkPayment;
