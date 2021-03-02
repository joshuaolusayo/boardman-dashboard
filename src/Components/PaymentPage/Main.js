import React from "react";
import { LeftOutlined } from "@ant-design/icons";

const Main = () => {
	return (
		<div className="payment-page__main">
			<div>
				<span className="text-gray mb-2 mb-lg-3 d-inline-block">
					<LeftOutlined /> Back to Home
				</span>
				<h2 className="font-weight-bold mb-4">NG Salary_Feb Bulk Payment</h2>
			</div>
			<div className="dashboard__main-cards">
				<div className="car_d mb-4">
					<div className="d-flex">
						<img className="mr-3" src="/assets/disbursed.png" alt="Disbursed" />
						<div>
							<span className="text-uppercase d-block mb-3 text-dark-gray font-weight-bold">
								Total amount to be disbursed
							</span>
							<p className="font-weight-bold d-block num">#294,000,000</p>
							<p className="mt-3 d-block text-dark-gray">Count: 394,092</p>
						</div>
					</div>
				</div>
				<div className="car_d mb-4">
					<div className="d-flex">
						<img className="mr-3" src="/assets/payment.png" alt="Disbursed" />
						<div>
							<span className="text-uppercase d-block mb-3 text-dark-gray font-weight-bold">Total disbursed so far</span>
							<p className="font-weight-bold d-block num">#5,880,000</p>
							<div className="d-flex justify-content-between">
								<p className="mt-3 text-dark-gray">Count: 394,092</p>
								<p className="mt-3 text-dark-gray">
									Count: <span className="text-success">394,092</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="car_d mb-4">
					<div className="d-flex">
						<img className="mr-3" src="/assets/contact.png" alt="Disbursed" />
						<div>
							<span className="text-uppercase d-block mb-3 text-dark-gray font-weight-bold">Transaction success rate</span>
							<div className="d-flex justify-content-stretch align-items-center">
								<span className="mr-3">65%</span>
								<div className="progress w-100">
									<div
										className="progress-bar bg-success"
										role="progressbar"
										style={{ width: "65%" }}
										aria-valuenow="65"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
