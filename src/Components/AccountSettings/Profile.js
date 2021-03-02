import React, { useState } from "react";
import Switch from "react-switch";

const Profile = () => {
	const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState(false);

	return (
		<div className="w-100 pt-4">
			<h3 className="font-weight-bold">Profile Details</h3>
			<p className="text-gray mb-3">Enter your profile information</p>

			<div className="p-3 p-md-4 mb-3 mb-lg-4 shadow row mx-0 align-items-start">
				<div className="col-9 col-md-8">
					<h3>Enable Authenticator</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid inventore voluptatem est commodi, itaque
						temporibus ad quas distinctio.
					</p>
				</div>
				<div className="col-3 col-md-4 text-right ml-md-auto">
					<Switch onChange={(checked) => setChecked(checked)} checked={checked} />
				</div>
			</div>
			
            <div className="p-3 p-md-4 mb-3 mb-lg-4 shadow row mx-0 align-items-start">
				<div className="col-9 col-sm-8 col-md-6">
					<h3>Enable SMS Authentication <span className="badge badge-success">Verified</span></h3>
					<p>
						Available emails:
					</p>
				</div>
				<div className="col-3 col-sm-4 col-md-6 text-right ml-md-auto">
					<Switch onChange={(checked) => setEmail(checked)} checked={email} />
				</div>
			</div>
		</div>
	);
};

export default Profile;
