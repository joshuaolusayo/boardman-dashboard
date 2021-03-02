import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchOutlined, ArrowRightOutlined, ReloadOutlined } from "@ant-design/icons";
import Select from "react-select";

const options = [
	{ value: "All Channels", label: "All Channels" },
	{ value: "Some Channels", label: "Some Channels" },
];

const exportOptions = [
	{ value: "Export", label: "Export" },
	{ value: "Option 2", label: "Option 2" },
];

const PaymentTransaction = () => {
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
								<th>Full name</th>
								<th>Milestone</th>
								<th>Amount</th>
								<th>Email</th>
								<th>Status</th>
								<th>Date</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/transaction-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>1/4</td>
								<td>#103,000</td>
								<td>usman@gmail.com</td>
								<td className="text-success">
									<span className="bg-success rounded px-2 text-light">Success</span>{" "}
									<span className="text-success">1</span>/<span className="text-dark">4</span>
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/transaction-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>1/4</td>
								<td>#103,000</td>
								<td>usman@gmail.com</td>
								<td className="text-success">
									<span className="bg-danger rounded px-2 text-light">Failed</span> <span className="text-danger">1</span>
									/<span className="text-dark">4</span>{" "}
									<span className="refresh bg-dark-blue text-light text-center d-inline-block rounded">
										<ReloadOutlined />
									</span>
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/transaction-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>1/4</td>
								<td>#103,000</td>
								<td>usman@gmail.com</td>
								<td className="text-success">
									<span className="bg-success rounded px-2 text-light">Success</span>{" "}
									<span className="text-success">1</span>/<span className="text-dark">4</span>
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/transaction-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>1/4</td>
								<td>#103,000</td>
								<td>usman@gmail.com</td>
								<td className="text-success">
									<span className="bg-danger rounded px-2 text-light">Failed</span> <span className="text-danger">1</span>
									/<span className="text-dark">4</span>{" "}
									<span className="refresh bg-dark-blue text-light text-center d-inline-block rounded">
										<ReloadOutlined />
									</span>
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/transaction-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>1/4</td>
								<td>#103,000</td>
								<td>usman@gmail.com</td>
								<td className="text-success">
									<span className="bg-success rounded px-2 text-light">Success</span>{" "}
									<span className="text-success">1</span>/<span className="text-dark">4</span>
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/transaction-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>1/4</td>
								<td>#103,000</td>
								<td>usman@gmail.com</td>
								<td className="text-success">
									<span className="bg-danger rounded px-2 text-light">Failed</span> <span className="text-danger">1</span>
									/<span className="text-dark">4</span>{" "}
									<span className="refresh bg-dark-blue text-light text-center d-inline-block rounded">
										<ReloadOutlined />
									</span>
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/transaction-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>1/4</td>
								<td>#103,000</td>
								<td>usman@gmail.com</td>
								<td className="text-success">
									<span className="bg-success rounded px-2 text-light">Success</span>{" "}
									<span className="text-success">1</span>/<span className="text-dark">4</span>
								</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
						</tbody>
					</table>
					<div className="text-center text-dark-blue text-underline">See All Transactions</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentTransaction;
