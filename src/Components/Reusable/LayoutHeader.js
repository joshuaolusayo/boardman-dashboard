import React from "react";
import { Link } from "react-router-dom";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";

const LayoutHeader = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-between layout__content-header">
			<div className="input-group input-group-search mb-3 mb-lg-0">
				<input
					type="text"
					className="form-control layout__header-search"
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
				/>
				<div className="input-group-append">
					<button className="btn btn-outline-secondary" type="button">
						<SearchOutlined />
					</button>
				</div>
			</div>
			<div className="d-flex">
				<div className="mr-3 notification">
                    <span className="notification-badge rounded-circle d-inline-block bg-danger text-light">3</span>
					<BellOutlined style={{ fontSize: '35px' }} />
				</div>
				<Link className="btn btn-success" to="/create-payment">
					<span className="mr-3">+</span>
					Create bulk payment
				</Link>
			</div>
		</div>
	);
};

export default LayoutHeader;
