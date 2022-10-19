import React from 'react'
import HotelCard from './HotelCard'

const HotelListings = ({hotels}) => {
	return (
		<section className='mb-32 text-orange-300'>
			<h2 className='text-3xl font-bold mb-12 text-center capitalize'>
				Stay at our top unique properties
			</h2>

			<div className='grid lg:grid-cols-3 gap-6'>
				{hotels.map(hotel => (
					<HotelCard key={hotel.id} hotel={hotel} />
				))}
			</div>
		</section>
	)
}

export default HotelListings
