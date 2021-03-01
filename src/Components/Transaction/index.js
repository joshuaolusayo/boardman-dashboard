import React, { useEffect } from "react";
import LayoutNav from "../Reusable/LayoutNav";
import LayoutHeader from "../Reusable/LayoutHeader";
import Overview from "./Overview";
import History from "./History";

const Transaction = (props) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behaviour: "smooth",
		});
	}, [props.location.pathname]);
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
