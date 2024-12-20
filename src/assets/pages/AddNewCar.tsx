import GoogleAdressSearch from '../../components/GoogleAdressSearch';
import Header from '../../components/Header';

const AddNewCar: React.FC = () => {
	return (
		<div className='flex flex-col gap-10 items-center justify-center'>
			<Header />
			<h2 className='mt-10 font-bold text-3xl text-red-500 '>
				Add New Car
			</h2>
			<div className='flex flex-col  items-center shadow-xl shadow-gray-300 px-4 py-2 roudend-md'>
				<h2 className='font-semibold text-red-400 text-xl mb-2'>
					Enter the adrress
				</h2>
				<GoogleAdressSearch />
				<button className=''>Next</button>
			</div>
		</div>
	);
};

export default AddNewCar;
