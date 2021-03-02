import React, { useState, useEffect } from "react";
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

const PaymentHistory = () => {
	const [selectedOption, setSelectedOption] = useState("All Time");
	const [anotherOption, setAnotherOption] = useState("Export");

	useEffect(() => {
		console.log(selectedOption);
		console.log(anotherOption);
	}, [selectedOption, anotherOption]);

	return (
		<div className="dashboard__payment">
			<h2 className="font-weight-bold mt-md-5 mb-4">Bulk Payment History</h2>
			<div className="bg-white py-5 px-2 px-md-4">
				<div className="bg-white border-bottom pb-0">
					<h5 className="d-inline-block text-gray bb-payment pb-2 mb-0">All Bulk Payments</h5>
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
							defaultValue="username"
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
								<th>Title</th>
								<th>Milestones</th>
								<th>Total Amount</th>
								<th>Contacts</th>
								<th>Status</th>
								<th>Date</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="text-purple">#70058</td>
								<td>NG_Salary</td>
								<td>3</td>
								<td>#103,000,000</td>
								<td>1,040</td>
								<td className="text-success">
									<span className="bg-success rounded px-2 text-light">Complete</span> 1040/1040
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td className="text-purple">#70058</td>
								<td>NG_Salary</td>
								<td>3</td>
								<td>#103,000,000</td>
								<td>1,040</td>
								<td className="text-warning">
									<span className="bg-warning px-2 text-light">Complete</span> 1040/1040
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td className="text-purple">#70058</td>
								<td>NG_Salary</td>
								<td>3</td>
								<td>#103,000,000</td>
								<td>1,040</td>
								<td className="text-danger">
									<span className="bg-danger px-2 text-light">Complete</span> 1040/1040
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td className="text-purple">#70058</td>
								<td>NG_Salary</td>
								<td>3</td>
								<td>#103,000,000</td>
								<td>1,040</td>
								<td className="text-success">
									<span className="bg-success rounded px-2 text-light">Complete</span> 1040/1040
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default PaymentHistory;
