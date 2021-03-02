import React, { useEffect } from "react";
import LayoutNav from "../Reusable/LayoutNav";
import LayoutHeader from "../Reusable/LayoutHeader";
import Detail from "./Detail";

const AccountSettings = (props) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behaviour: "smooth",
		});
	}, [props.location.pathname]);
	return (
		<div>
			<div className="layout transaction contact">
				<LayoutNav />
				<div className="layout__content">
					<LayoutHeader />
					<Detail />
				</div>
			</div>
		</div>
	);
};

export default AccountSettings;
