//hooks
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
//images
import image1 from '/src/images/FlexCar.png';
//supabase
import supabase from '../../supabase/supabase';

const LoginPage: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setError('');

		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			setError(error.message);
		} else {
			navigate('/');
		}
	};
	return (
		<div className='flex justify-center items-center h-screen bg-gray-100'>
			<div className='max-w-sm w-full  bg-white  p-8 rounded-lg shadow-lg'>
				<Link to={'/register'} className='flex justify-end mb-2'>
					<p className='underline text-md font-semibold text-red-300'>
						Back To Register Page
					</p>
				</Link>
				<div className='flex flex-col items-center justify-center mb-4'>
					<h2 className='text-2xl font-bold text-center text-red-500 mb-6'>
						Login
					</h2>
					<img src={image1} alt='Logo' className='h-20 w-42' />
				</div>

				<form onSubmit={handleLogin} className='space-y-4'>
					<input
						type='email'
						placeholder='Enter your email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='w-full p-3 border border-blue-500 rounded-md mb-4 focus:outline-none'
					/>

					<input
						type='password'
						placeholder='Enter your password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='w-full p-3 border border-blue-500 rounded-md mb-4 focus:outline-none'
					/>

					<button
						type='submit'
						className={`w-full py-3 bg-blue-600 text-white font-semibold rounded-md ${
							loading ? 'opacity-50' : ''
						}`}
						disabled={loading}>
						{loading ? 'Logging in...' : 'Login'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
