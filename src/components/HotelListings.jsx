import React from 'react'
import HotelCard from './HotelCard'

const HotelListings = ({hotels}) => {
	return (
		<section className='mb-32 text-gray-800'>
			<h2 className='text-3xl font-bold mb-12 text-center'>Our Listings</h2>

			<div className='grid lg:grid-cols-3 gap-6'>
				{hotels.map(hotel => (
					<HotelCard key={hotel.id} hotel={hotel} />
				))}
			</div>
		</section>
	)
}

export default HotelListings
