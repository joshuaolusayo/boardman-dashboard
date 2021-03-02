import React, { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import Profile from "./Profile";

const Detail = () => {
	const [selected, setSelected] = useState("profile");

	return (
		<div className="detail__main">
			<span className="text-gray mb-2 mb-lg-3 d-inline-block">
				<LeftOutlined /> Back to Home
			</span>
			<h2 className="font-weight-bold mb-4">Dispute Detail</h2>

			<div className="bg-white profile-details col-12">
				<div className="header text-gray d-flex flex-wrap border-bottom">
					<div onClick={() => setSelected("profile")} className="mr-3 mr-md-4 pb-3">
						Profile
					</div>
					<div onClick={() => setSelected("security")} className="mr-3 mr-md-4 pb-3">
						Security
					</div>
					<div onClick={() => setSelected("password")} className="mr-3 mr-md-4 pb-3">
						Password
					</div>
					<div onClick={() => setSelected("notifications")} className="mr-3 mr-md-4 pb-3">
						Notifications
					</div>
				</div>

				{selected === "profile" ? <Profile /> : <div>The component is yet to be created</div>}
			</div>

			<div className="d-flex flex-nowrap justify-content-end align-items-center my-3">
				<button className="btn btn-lg bg-white border shadow px-3 px-md-4 text-center text-dark mr-2">Cancel</button>
				<button className="btn btn-lg bg-info border shadow px-3 px-md-4 text-center text-light">Save</button>
			</div>
		</div>
	);
};

export default Detail;
