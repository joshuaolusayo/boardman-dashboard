import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Select from "react-select";

const options = [
	{ value: "All Channels", label: "All Channels" },
	{ value: "Some Channels", label: "Some Channels" },
];

const exportOptions = [
	{ value: "Export", label: "Export" },
	{ value: "Option 2", label: "Option 2" },
];

const DisputeDetails = () => {
	const [selectedOption, setSelectedOption] = useState("All Time");
	const [anotherOption, setAnotherOption] = useState("Export");

	useEffect(() => {
		console.log(selectedOption);
		console.log(anotherOption);
	}, [selectedOption, anotherOption]);

	return (
		<div className="dashboard__payment">
			<div className="bg-white py-5 px-2 px-md-4">
				<div className="bg-white border-bottom pb-0">
					<h5 className="d-inline-block text-gray bb-payment pb-2 mb-2 mb-md-0">All Transaction</h5>
				</div>
				<div className="search d-flex my-4 flex-wrap overflow-scroll-x">
					<div className="input-group input-group-search mb-3 mb-lg-0">
						<div className="input-group-append">
							<button className="btn btn-outline-secondary" type="button">
								<SearchOutlined />
							</button>
						</div>
						<input
							type="text"
							className="form-control layout__header-search"
							placeholder="Recipient's username"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
							defaultValue="Username"
						/>
					</div>
					<div className="mb-md-0 mx-3 d-flex align-items-center flex-nowrap">
						<input type="date" defaultValue="2020-01-01" />
						<ArrowRightOutlined />
						<input type="date" defaultValue="2020-01-01" />
					</div>
					<div className="d-flex flex-nowrap mx-3">
						<label htmlFor="Filter by">Filter by:</label>
						<Select className="max-w-search h-100" options={options} onChange={(e) => setSelectedOption(e.value)} />
					</div>
					<Select className="max-w-search h-100" options={exportOptions} onChange={(e) => setAnotherOption(e.value)} />
				</div>

				<div className="table-responsive w-100">
					<table className="table table-hover table-inverse w-100">
						<thead className="thead-inverse">
							<tr>
								<th>ID</th>
								<th>Email address</th>
								<th>Category</th>
								<th>via Channel</th>
								<th>via Merchant</th>
								<th>Amount</th>
								<th>Status</th>
								<th>Issue Created</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/dispute-detail">
										#2726171
									</Link>
								</td>
								<td>kunle@gmail.com</td>
								<td>Chargeback</td>
								<td><span className="text-purple">QR Payment</span></td>
								<td>#2GHU7171</td>
								<td>#193,000</td>
								<td><span className="bg-success text-light rounded px-2 py-1">Resolved</span></td>
								<td>11/03/21 19:29:2</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/dispute-detail">
										#2726171
									</Link>
								</td>
								<td>kunle@gmail.com</td>
								<td>Chargeback</td>
								<td><span className="text-purple">QR Payment</span></td>
								<td>#2GHU7171</td>
								<td>#193,000</td>
								<td><span className="bg-success text-light rounded px-2 py-1">Resolved</span></td>
								<td>11/03/21 19:29:2</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/dispute-detail">
										#2726171
									</Link>
								</td>
								<td>kunle@gmail.com</td>
								<td>Chargeback</td>
								<td><span className="text-purple">QR Payment</span></td>
								<td>#2GHU7171</td>
								<td>#193,000</td>
								<td><span className="bg-success text-light rounded px-2 py-1">Resolved</span></td>
								<td>11/03/21 19:29:2</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/dispute-detail">
										#2726171
									</Link>
								</td>
								<td>kunle@gmail.com</td>
								<td>Chargeback</td>
								<td><span className="text-purple">QR Payment</span></td>
								<td>#2GHU7171</td>
								<td>#193,000</td>
								<td><span className="bg-light border border-warning text-dark rounded px-2 py-1">Resolved</span></td>
								<td>11/03/21 19:29:2</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/dispute-detail">
										#2726171
									</Link>
								</td>
								<td>kunle@gmail.com</td>
								<td>Chargeback</td>
								<td><span className="text-purple">QR Payment</span></td>
								<td>#2GHU7171</td>
								<td>#193,000</td>
								<td><span className="bg-success text-light rounded px-2 py-1">Resolved</span></td>
								<td>11/03/21 19:29:2</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/dispute-detail">
										#2726171
									</Link>
								</td>
								<td>kunle@gmail.com</td>
								<td>Chargeback</td>
								<td><span className="text-purple">QR Payment</span></td>
								<td>#2GHU7171</td>
								<td>#193,000</td>
								<td><span className="bg-success text-light rounded px-2 py-1">Resolved</span></td>
								<td>11/03/21 19:29:2</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/dispute-detail">
										#2726171
									</Link>
								</td>
								<td>kunle@gmail.com</td>
								<td>Chargeback</td>
								<td><span className="text-purple">QR Payment</span></td>
								<td>#2GHU7171</td>
								<td>#193,000</td>
								<td><span className="bg-light border border-warning text-dark rounded px-2 py-1">Resolved</span></td>
								<td>11/03/21 19:29:2</td>
							</tr>
						</tbody>
					</table>
					<div className="text-center text-dark-blue text-underline">See All Disputes</div>
				</div>
			</div>
		</div>
	);
};

export default DisputeDetails;
