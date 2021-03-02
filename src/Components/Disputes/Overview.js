import React, { useState, useEffect } from "react";
import Select from "react-select";

const options = [
	{ value: "All Time", label: "All Time" },
	{ value: "Some Time", label: "Some Time" },
];

const Overview = () => {
	const [selectedOption, setSelectedOption] = useState("All Time");

	useEffect(() => {
		console.log(selectedOption);
	}, [selectedOption]);

	return (
		<div className="contact-page__main">
			<div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center mt-md-3 mb-4">
				<h2 className="font-weight-bold">All Disputes</h2>
				<Select className="selec_t" options={options} onChange={(e) => setSelectedOption(e.value)} />
			</div>
			<div className="dashboard__main-cards">
				<div className="car_d mb-4">
					<div className="d-flex">
						<img className="mr-3" src="/assets/disbursed.png" alt="Disbursed" />
						<div>
							<span className="text-uppercase d-block mb-3 text-dark-gray font-weight-bold">All Contacts</span>
							<p className="font-weight-bold d-block num">1000</p>
						</div>
					</div>
				</div>
				<div className="car_d mb-4">
					<div className="d-flex">
						<img className="mr-3" src="/assets/payment.png" alt="Disbursed" />
						<div>
							<span className="text-uppercase d-block mb-3 text-dark-gray font-weight-bold">Total bulk uploads</span>
							<p className="font-weight-bold d-block num">13</p>
						</div>
					</div>
				</div>
				<div className="car_d mb-4">
					<div className="d-flex">
						<img className="mr-3" src="/assets/contact.png" alt="Disbursed" />
						<div className="w-100">
							<span className="text-uppercase d-block mb-1 text-dark-gray font-weight-bold">Incomplete Contacts</span>
							<div className="d-flex justify-content-between align-items-end">
								<h3 className="text-black mb-0">129</h3>
								<span className="text-capitalize text-underline">see all</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
