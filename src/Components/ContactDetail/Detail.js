import React from "react";
import { LeftOutlined, CheckOutlined, EditOutlined } from "@ant-design/icons";
const Detail = () => {
	return (
		<div className="detail__main">
			<span className="text-gray mb-2 mb-lg-3 d-inline-block">
				<LeftOutlined /> Back to Home
			</span>
			<h2 className="font-weight-bold mb-4">Contact Detail</h2>

			<div className="bg-white profile-details col-lg-10 col-xl-8">
				<div className="d-sm-flex justify-content-between align-items-center mb-5">
					<div className="d-flex">
						<img className="profile-img mr-3 rounded-circle" src="/assets/avatar.png" alt="Usman Abiola" />
						<div className="d-flex flex-column justify-content-center">
							<h3 className="font-weight-bold">Usman Abiola</h3>
							<p className="text-gray mb-0">
								User ID: <span className="text-underline">2937382</span>
							</p>
						</div>
					</div>
					<button className="btn bg-light edit">
						<EditOutlined />
					</button>
				</div>
				<div>
					<h5 className="text-gray heading font-weight-bold mb-3">Bank detail</h5>
					<div className="d-sm-flex justify-content-between">
						<div className="d-flex">
							<img className="bank-img mr-3 rounded-circle" src="/assets/avatar.png" alt="Bank" />
							<div>
								<h4 className="font-weight-bold">UBA Bank</h4>
								<p className="text-gray">8173838922893</p>
							</div>
						</div>
						<div>
							<p className="text-dark-blue">10/02/2021 10:01pm</p>
						</div>
					</div>
				</div>
				<hr className="bg-gray my-3" />
				<div>
					<div className="d-flex justify-content-between">
						<div className="mb-3">
							<h5 className="text-gray heading font-weight-bold">Email address</h5>
							<h4>myemail@email.com</h4>
						</div>
						<div className="text-right mb-3">
							<h5 className="text-gray heading font-weight-bold">Batch</h5>
							<h4 className="text-dark">NG_FEB Salary</h4>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div>
							<h5 className="text-gray heading font-weight-bold">Phone number</h5>
							<h4>+2348049377262</h4>
						</div>
						<div className="text-right">
							<h5 className="text-gray heading font-weight-bold">Milestones</h5>
							<h4 className="text-dark">9</h4>
						</div>
					</div>
				</div>
				<hr className="bg-gray my-3" />
				<div className="full-details">
					<h3 className="font-weight-bold">Full Details</h3>
					<div className="d-flex justify-content-between mb-3">
						<span className="text-gray">All time payments</span>
						<span>#100,000,000</span>
					</div>
					<div className="d-flex justify-content-between mb-3">
						<span className="text-gray">Disbursement</span>
						<span className="text-dark-blue">Inactive</span>
					</div>
					<div className="d-flex justify-content-between mb-3">
						<p className="font-weight-bold">Last Transfer</p>
						<p className="transfer font-weight-bold">#10,000,000</p>
					</div>
					<div className="text-right text-gray">
						<span className="bg-success text-light d-inline-block success rounded-circle text-center">
							<CheckOutlined />
						</span>{" "}
						Successful
						<div className="text-gray mt-2">
							<small>10/02/2021 10:01pm</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
