import { useState } from 'react';
import GooglePlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-google-places-autocomplete';
import { IoLocationOutline } from 'react-icons/io5';
const GoogleAdressSearch = () => {
	const [selectedAdress, setSelectedAdress] = useState<string>('');
	const [coordinates, setCoordinates] = useState<string>('');
	return (
		<div className='flex items-center w-full'>
			<IoLocationOutline size={50} color='red' />
			<GooglePlacesAutocomplete
				apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
				selectProps={{
					placeholder: 'Search car address',
					isClearable: true,
					className: 'w-full',
					onChange: (place) => {
						console.log(place);
						setSelectedAdress(place);
						geocodeByAddress(place.label)
							.then((results) =>
								getLatLng(results[0]).then(({ lat, lng }) => {
									setCoordinates({ lat, lng });
								})
							)
							.catch((error) => {
								console.error('Error occurred:', error);
							});
					},
				}}
			/>
		</div>
	);
};

export default GoogleAdressSearch;
