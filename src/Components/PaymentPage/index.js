import React, { useEffect } from "react";
import LayoutNav from "../Reusable/LayoutNav";
import LayoutHeader from "../Reusable/LayoutHeader";
import Main from "./Main";
import PaymentTransaction from "./PaymentTransaction";

const PaymentPage = (props) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behaviour: "smooth",
		});
	}, [props.location.pathname]);
	return (
		<div>
			<div className="layout payment-page">
				<LayoutNav />
				<div className="layout__content">
					<LayoutHeader />
					<Main />
					<PaymentTransaction />
				</div>
			</div>
		</div>
	);
};

export default PaymentPage;
