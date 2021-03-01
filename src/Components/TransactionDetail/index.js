import React from "react";
import LayoutNav from "../Reusable/LayoutNav";
import LayoutHeader from "../Reusable/LayoutHeader";
import Detail from "./Detail";
import PaymentBreakdown from "./PaymentBreakdown";

const Transaction = () => {
	return (
		<div>
			<div className="layout transaction">
				<LayoutNav />
				<div className="layout__content">
					<LayoutHeader />
                    <Detail />
					<PaymentBreakdown />
				</div>
			</div>
		</div>
	);
};

export default Transaction;
