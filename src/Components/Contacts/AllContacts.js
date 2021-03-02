import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchOutlined, ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Select from "react-select";

const options = [
	{ value: "All Channels", label: "All Channels" },
	{ value: "Some Channels", label: "Some Channels" },
];

const exportOptions = [
	{ value: "Export", label: "Export" },
	{ value: "Option 2", label: "Option 2" },
];

const AllContacts = () => {
	const [selectedOption, setSelectedOption] = useState("All Time");
	const [anotherOption, setAnotherOption] = useState("Export");

	useEffect(() => {
		console.log(selectedOption);
		console.log(anotherOption);
	}, [selectedOption, anotherOption]);

	return (
		<div className="contact-page__table">
			<h2 className="font-weight-bold mt-md-5 mb-4">All Contacts</h2>
			<div className="bg-white py-5 px-2 px-md-4">
				<div className="bg-white border-bottom pb-0">
					<h5 className="d-inline-block text-gray bb-payment pb-2 mb-2 mb-md-0">All Contacts</h5>
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
								<th>Email</th>
								<th>Phone</th>
								<th>Bank</th>
								<th>Account no.</th>
								<th>Date Added</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/contact-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>usman@gmail.com</td>
								<td>070938372921</td>
								<td>UBA Bank</td>
								<td>91739938949</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/contact-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>usman@gmail.com</td>
								<td>070938372921</td>
								<td>UBA Bank</td>
								<td>91739938949</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/contact-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>usman@gmail.com</td>
								<td>070938372921</td>
								<td>UBA Bank</td>
								<td>91739938949</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/contact-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>usman@gmail.com</td>
								<td>070938372921</td>
								<td>UBA Bank</td>
								<td>91739938949</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/contact-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>usman@gmail.com</td>
								<td>070938372921</td>
								<td>UBA Bank</td>
								<td>91739938949</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/contact-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>usman@gmail.com</td>
								<td>070938372921</td>
								<td>UBA Bank</td>
								<td>91739938949</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/contact-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>usman@gmail.com</td>
								<td>070938372921</td>
								<td>UBA Bank</td>
								<td>91739938949</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/contact-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>usman@gmail.com</td>
								<td>070938372921</td>
								<td>UBA Bank</td>
								<td>91739938949</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/contact-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>usman@gmail.com</td>
								<td>070938372921</td>
								<td>UBA Bank</td>
								<td>91739938949</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/contact-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>usman@gmail.com</td>
								<td>070938372921</td>
								<td>UBA Bank</td>
								<td>91739938949</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/contact-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>usman@gmail.com</td>
								<td>070938372921</td>
								<td>UBA Bank</td>
								<td>91739938949</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
							<tr>
								<td>
									<Link className="text-dark-blue" to="/contact-detail">
										#70058
									</Link>
								</td>
								<td>Usman Abiola</td>
								<td>usman@gmail.com</td>
								<td>070938372921</td>
								<td>UBA Bank</td>
								<td>91739938949</td>
								<td>10/02/2021 10:01pm</td>
								<td>...</td>
							</tr>
						</tbody>
					</table>
					<nav aria-label="Page navigation example">
						<ul className="pagination justify-content-center">
							<li className="page-item disabled">
								<button className="page-link text-gray border-0" tabIndex="-1">
									<ArrowLeftOutlined />
								</button>
							</li>
							<li className="page-item">
								<button className="page-link text-gray border-0">
									1
								</button>
							</li>
							<li className="page-item">
								<button className="page-link text-gray border-0">
									2
								</button>
							</li>
							<li className="page-item">
								<button className="page-link text-gray border-0">
									3
								</button>
							</li>
							<li className="page-item">
								<button className="page-link text-gray border-0">
									...
								</button>
							</li>
							<li className="page-item">
								<button className="page-link text-gray border-0">
									20
								</button>
							</li>
							<li className="page-item">
								<button className="page-link text-gray border-0">
									<ArrowRightOutlined />
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default AllContacts;
