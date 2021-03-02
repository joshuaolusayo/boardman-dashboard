import React, { useState, useEffect } from "react";
import Select from "react-select";

const options = [
	{ value: "All Time", label: "All Time" },
	{ value: "Some Time", label: "Some Time" },
];

const Main = () => {
	const [selectedOption, setSelectedOption] = useState("All Time");

	useEffect(() => {
		console.log(selectedOption);
	}, [selectedOption]);

	return (
		<div className="dashboard__main">
			<div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center mt-md-3 mb-4">
				<h2 className="font-weight-bold">Dashboard</h2>
				<Select className="selec_t" options={options} onChange={(e) => setSelectedOption(e.value)} />
			</div>
			<div className="dashboard__main-cards">
				<div className="car_d mb-4">
					<div className="d-flex">
						<img className="mr-3" src="/assets/disbursed.png" alt="Disbursed" />
						<div>
							<span className="text-uppercase d-block mb-3 text-dark-gray font-weight-bold">Total disbursed</span>
							<p className="font-weight-bold d-block num">#294,000,000,000.14</p>
							<p className="mt-3 d-block text-dark-gray">Count: 394,092</p>
						</div>
					</div>
				</div>
				<div className="car_d mb-4">
					<div className="d-flex">
						<img className="mr-3" src="/assets/payment.png" alt="Disbursed" />
						<div>
							<span className="text-uppercase d-block mb-3 text-dark-gray font-weight-bold">Total bulk payment</span>
							<p className="font-weight-bold d-block num">012</p>
						</div>
					</div>
				</div>
				<div className="car_d mb-4">
					<div className="d-flex">
						<img className="mr-3" src="/assets/contact.png" alt="Disbursed" />
						<div>
							<span className="text-uppercase d-block mb-3 text-dark-gray font-weight-bold">All contacts</span>
							<p className="font-weight-bold d-block num">#294,000,013.14</p>
							<p className="mt-3 d-block">Active: 80%</p>
						</div>
					</div>
				</div>
				<div className="car_d mb-4 d-flex justify-content-center align-items-center">
					<div className="d-flex flex-column w-100">
						<button className="btn bg-success text-center w-100 mb-4 text-light">Create Bulk Payment</button>
						<button className="btn bg-secondary text-center w-100 text-light">Send Instant Payment</button>
					</div>
				</div>
				<div className="car_d mb-4 span-2">
					<div className="d-sm-flex justify-content-sm-between align-items-sm-center">
						<div className="h-100">
							<p>
								<span className="font-weight-bold">20</span> out of <span className="font-weight-bold">500</span>{" "}
								<span className="text-success font-weight-bold">Successfully Disbursed</span>
							</p>
							<span className="text-muted d-block mb-3">
								You can track your disbursement status from your disbursement detail
							</span>
							<button className="border text-dark px-4 py-2 bg-light btn">View</button>
						</div>
						<div className="h-100 d-none d-sm-block">
							<img className="h-100 w-100" src="/assets/icon.png" alt="Icon" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
