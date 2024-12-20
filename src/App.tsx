import './App.css';
//react-router
import {
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
//page&&components
import HomePage from './assets/pages/HomePage';
import LoginPage from './assets/pages/LoginPage';
import RegisterPage from './assets/pages/RegisterPage';
import { ToastContainer } from 'react-toastify';
import AddNewCar from './assets/pages/AddNewCar';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/addnewcar' element={<AddNewCar />} />
			</Routes>
			<ToastContainer />
		</Router>
	);
};

export default App;
