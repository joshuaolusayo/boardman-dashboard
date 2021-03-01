import React from "react";
import LayoutNav from "../Reusable/LayoutNav";
import LayoutHeader from "../Reusable/LayoutHeader";
import Main from "./Main";
import PaymentHistory from "./PaymentHistory";

const Dashboard = () => {
	return (
		<div>
			<div className="layout dashboard">
				<LayoutNav />
				<div className="layout__content">
					<LayoutHeader />
                    <Main />
					<PaymentHistory />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
