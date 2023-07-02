import "./App.css";
import Store from "./components/context/Store";
import MainRouter from "./components/routing/router/MainRouter";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
    return (
		<Store>
			<Router>
				<Routes>
					<Route path="/*" element={<MainRouter />} />
				</Routes>
			</Router>
		</Store>
	)
}

export default App;
