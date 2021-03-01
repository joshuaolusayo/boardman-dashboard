import React from "react";
import { Link } from "react-router-dom";
import { BarsOutlined, PullRequestOutlined } from "@ant-design/icons";

const LayoutNav = () => {
	return (
		<div className="layout__nav">
			<div class="fixed">
				<img className="logo d-none d-lg-inline-block" src="/assets/logo.png" alt="Boardman Corporation Logo" />

				<div className="d-flex justify-content-between flex-lg-column align-items-lg-start mt-lg-5">
					<Link to="/" className="btn px-lg-0 mb-lg-3">
						<span className="mr-3 mt-n2">
							<BarsOutlined />
						</span>
						<span className="d-none d-lg-inline-block">Home</span>
					</Link>
					<Link to="/transaction" className="btn px-lg-0 mb-lg-3">
						<span className="mr-3 mt-n2">
							<PullRequestOutlined />
						</span>
						<span className="d-none d-lg-inline-block">Transaction</span>
					</Link>
					<Link to="/" className="btn px-lg-0 mb-lg-3">
						<span className="mr-3 mt-n2">
							<PullRequestOutlined />
						</span>
						<span className="d-none d-lg-inline-block">All Contacts</span>
					</Link>
					<Link to="/" className="btn px-lg-0 mb-lg-3">
						<span className="mr-3 mt-n2">
							<PullRequestOutlined />
						</span>
						<span className="d-none d-lg-inline-block">Dispute</span>
					</Link>
					<Link to="/" className="btn px-lg-0 mb-lg-3">
						<span className="mr-3 mt-n2">
							<PullRequestOutlined />
						</span>
						<span className="d-none d-lg-inline-block">Account</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LayoutNav;
