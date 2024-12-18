import './App.css';
//react-router
import {
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import HomePage from './assets/pages/HomePage';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</Router>
	);
};

export default App;
