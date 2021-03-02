import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Dashboard from "./Components/Dashboard";
import Transaction from "./Components/Transaction";
import TransactionDetail from "./Components/TransactionDetail";
import BulkPayment from "./Components/BulkPayment";
import PaymentPage from "./Components/PaymentPage";
import Contacts from "./Components/Contacts";
import ContactDetail from "./Components/ContactDetail";
import Disputes from "./Components/Disputes";
import DisputeDetail from "./Components/DisputeDetail";

import "./styles.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={(props) => <Dashboard {...props} />} />
				<Route exact path="/transaction" render={(props) => <Transaction {...props} />} />
				<Route exact path="/transaction-detail" render={(props) => <TransactionDetail {...props} />} />
				<Route exact path="/create-payment" render={(props) => <BulkPayment {...props} />} />
				<Route exact path="/payment-page" render={(props) => <PaymentPage {...props} />} />
				<Route exact path="/contact" render={(props) => <Contacts {...props} />} />
				<Route exact path="/contact-detail" render={(props) => <ContactDetail {...props} />} />
				<Route exact path="/dispute" render={(props) => <Disputes {...props} />} />
				<Route exact path="/dispute-detail" render={(props) => <DisputeDetail  {...props} />} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
