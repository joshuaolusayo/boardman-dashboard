import React from "react";
import LayoutNav from "../Reusable/LayoutNav";
import LayoutHeader from "../Reusable/LayoutHeader";
import Overview from "./Overview";
import History from "./History";

const Transaction = () => {
	return (
		<div>
			<div className="layout transaction">
				<LayoutNav />
				<div className="layout__content">
					<LayoutHeader />
                    <Overview />
					<History />
				</div>
			</div>
		</div>
	);
};

export default Transaction;
