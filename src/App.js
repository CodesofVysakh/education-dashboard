import "./App.css";
import Store from "./components/context/Store";
import MainRouter from "./components/routing/MainRouter";

function App() {
    return (
		<Store>
			<MainRouter />
		</Store>
	)
}

export default App;
