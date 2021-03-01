import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Dashboard from "./Components/Dashboard";
import Transaction from "./Components/Transaction";

import "./styles.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={(props) => <Dashboard {...props} />} />
				<Route exact path="/transaction" render={(props) => <Transaction {...props} />} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
