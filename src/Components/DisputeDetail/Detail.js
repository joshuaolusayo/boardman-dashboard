import React from "react";
import { LeftOutlined } from "@ant-design/icons";
const Detail = () => {
	return (
		<div className="detail__main">
			<span className="text-gray mb-2 mb-lg-3 d-inline-block">
				<LeftOutlined /> Back to Home
			</span>
			<h2 className="font-weight-bold mb-4">Dispute Detail</h2>

			<div className="bg-white profile-details col-lg-10 col-xl-8">
				<div className="d-flex flex-column justify-content-center align-items-center text-center my-5">
					<img className="mb-3" src="/assets/ua.png" alt="Usman Abiola" />
					<h3>Usman Abiola</h3>
					<p className="text-gray">
						User ID: <span className="text-dark-blue">#92819389</span>
					</p>
				</div>
				<div className="table-responsive">
					<table className="table table-inverse">
						<tbody>
							<tr>
								<td className="text-gray">Status</td>
								<td>Pending</td>
							</tr>
							<tr>
								<td className="text-gray">Issue created</td>
								<td>19/02/2021 10:03am</td>
							</tr>
							<tr>
								<td className="text-gray">Issue category</td>
								<td className="text-dark-blue">Chargeback</td>
							</tr>
							<tr>
								<td className="text-gray">Issue created</td>
								<td>19/02/2021 10:03am</td>
							</tr>
							<tr>
								<td className="text-gray">Issue created</td>
								<td>19/02/2021 10:03am</td>
							</tr>
							<tr>
								<td className="text-gray">Amount</td>
								<td>#383,000</td>
							</tr>
							<tr>
								<td className="text-gray">Reference</td>
								<td>#993,000,000.21</td>
							</tr>
							<tr className="border-bottom">
								<td className="text-gray">Action Log</td>
								<td className="text-dark-blue">See Activity Log</td>
							</tr>
						</tbody>
					</table>
				</div>
				<button className="btn w-100 text-light bg-info py-2 my-3 text-center">Resolve Dispute</button>
			</div>
		</div>
	);
};

export default Detail;
