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

const PaymentBreakdown = () => {
	const [selectedOption, setSelectedOption] = useState("All Time");

	useEffect(() => {
		console.log(selectedOption);
	}, [selectedOption]);

	return (
		<div className="payment__breakdown">
			<h2 className="font-weight-bold mt-md-5 mb-4">Transaction History</h2>
			<div className="bg-white py-5 px-4">
				<div className="bg-white border-bottom pb-0">
					<h5 className="d-inline-block text-gray bb-payment pb-2 mb-2 mb-md-0">All Bulk Payments</h5>
					<h5 className="d-inline-block text-gray pb-2 mb-2 mb-md-0 mx-3 mx-md-5">Successful</h5>
					<h5 className="d-inline-block text-gray pb-2 mb-2 mb-md-0">Failed</h5>
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
						/>
					</div>
					<div className="mb-md-0 mx-3 d-flex align-items-center flex-nowrap">
						<input type="date" value="2020-01-01" />
						<ArrowRightOutlined />
						<input type="date" value="2020-01-01" />
					</div>
					<div className="d-flex flex-nowrap mx-3">
						<label htmlFor="Filter by">Filter by:</label>
						<Select className="max-w-search h-100" options={options} onChange={(e) => setSelectedOption(e.value)} />
					</div>
					<Select className="max-w-search h-100" options={exportOptions} />
				</div>

				<div className="table-responsive w-100">
					<table className="table table-hover table-inverse w-100">
						<thead className="thead-inverse">
							<tr>
								<th>ID</th>
								<th>Full name</th>
								<th>Bulk batch</th>
								<th>Amount</th>
								<th>Milestone</th>
								<th>Status</th>
								<th>Last Payment Date</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><Link className="text-dark-blue" to="/transaction-detail">#70058</Link></td>
								<td>Usman Abiola</td>
								<td className="text-dark-blue text-underline">NG_Salary</td>
								<td>#103,000,000</td>
								<td>3/5</td>
								<td className="text-success">
									<span className="bg-success rounded px-2 text-light">Success</span> 1/4
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td><Link className="text-dark-blue" to="/transaction-detail">#70058</Link></td>
								<td>Usman Abiola</td>
								<td className="text-dark-blue text-underline">NG_Salary</td>
								<td>#103,000,000</td>
								<td>3/5</td>
								<td className="text-success">
									<span className="bg-success rounded px-2 text-light">Success</span> 1/4
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td><Link className="text-dark-blue" to="/transaction-detail">#70058</Link></td>
								<td>Usman Abiola</td>
								<td className="text-dark-blue text-underline">NG_Salary</td>
								<td>#103,000,000</td>
								<td>3/5</td>
								<td className="text-success">
									<span className="bg-success rounded px-2 text-light">Success</span> 1/4
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td><Link className="text-dark-blue" to="/transaction-detail">#70058</Link></td>
								<td>Usman Abiola</td>
								<td className="text-dark-blue text-underline">NG_Salary</td>
								<td>#103,000,000</td>
								<td>3/5</td>
								<td className="text-success">
									<span className="bg-success rounded px-2 text-light">Success</span> 1/4
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td><Link className="text-dark-blue" to="/transaction-detail">#70058</Link></td>
								<td>Usman Abiola</td>
								<td className="text-dark-blue text-underline">NG_Salary</td>
								<td>#103,000,000</td>
								<td>3/5</td>
								<td className="text-success">
									<span className="bg-success rounded px-2 text-light">Success</span> 1/4
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
						</tbody>
					</table>
					<button className="btn text-center text-dark-blue">See All Transactions</button>
				</div>
			</div>
		</div>
	);
};

export default PaymentBreakdown;
