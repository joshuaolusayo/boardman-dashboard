import React, { useEffect } from "react";
import LayoutNav from "../Reusable/LayoutNav";
import LayoutHeader from "../Reusable/LayoutHeader";
import Main from "./Main";
import AllContacts from "./AllContacts";

const Contacts = (props) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behaviour: "smooth",
		});
	}, [props.location.pathname]);
	return (
		<div>
			<div className="layout contact-page">
				<LayoutNav />
				<div className="layout__content">
					<LayoutHeader />
					<Main />
					<AllContacts />
				</div>
			</div>
		</div>
	);
};

export default Contacts;
