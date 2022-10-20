import React from 'react'
import HotelListings from '../features/HotelListings'
import {Hero} from '../layout'

export const Landing = () => {
	return (
		<div className='container px-6 mx-auto'>
			<Hero
				title='Oodle Kabooble'
				prose='We got oodles of kaboodles for you to book your latest hotel getaway.'
			/>
			<HotelListings />
		</div>
	)
}

export default Landing
