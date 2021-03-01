import React from "react";
import { LeftOutlined } from "@ant-design/icons";

const Detail = () => {
	return (
		<div className="detail__main">
            <span className="text-gray">
                <LeftOutlined /> Back to Home
            </span>
			<h2 className="font-weight-bold">Transaction Detail</h2>
		</div>
	);
};

export default Detail;
