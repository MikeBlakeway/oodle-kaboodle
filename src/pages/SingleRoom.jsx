import React from 'react'
import {useParams} from 'react-router-dom'
import hotels from '../data/accommodation.json'
import availability from '../data/accommodation_availability.json'

export const SingleRoom = () => {
	const {id, roomId} = useParams()
	const hotelById = hotels.accommodations.find(hotels => hotels.id === +id)
	const thisRoom = hotelById.rooms.find(room => room.id === +roomId)
	const roomAvailability = availability.rooms.find(room => room.id === +roomId)
	console.log(roomAvailability)

	return (
		<section className='px-12'>
			<h2 className='text-orange-600 text-3xl text-center font-bold px-16'>
				{thisRoom.name}
			</h2>
			<div className='container mx-auto grid grid-cols-2 gap-4 place-items-center'>
				<div className='pt-4 py-6'>
					<p className='text-orange-600 text-lg font-bold mx-2'>
						Price:{' '}
						<span className='inline-block bg-orange-100 rounded-full px-3 py-1 text-xs font-semibold text-orange-500 mr-2 mb-2'>
							{thisRoom.price.price}
						</span>
					</p>
					<p className='text-orange-600 text-lg font-bold mx-2'>
						Type:{' '}
						<span className='inline-block bg-orange-100 rounded-full px-3 py-1 text-xs font-semibold text-orange-500 mr-2 mb-2'>
							{thisRoom.type}
						</span>
					</p>
					<p className='text-orange-600 text-lg font-bold mx-2'>
						Max Occupancy:{' '}
						<span className='inline-block bg-orange-100 rounded-full px-3 py-1 text-xs font-semibold text-orange-500 mr-2 mb-2'>
							{thisRoom.max_occupancy}
						</span>
					</p>
					<p className='text-orange-600 text-lg font-bold mx-2'>
						Min Occupancy:{' '}
						<span className='inline-block bg-orange-100 rounded-full px-3 py-1 text-xs font-semibold text-orange-500 mr-2 mb-2'>
							{thisRoom.min_occupancy}
						</span>
					</p>
					<p className='text-orange-600 text-lg font-bold mx-2'>
						Available:{' '}
						<span className='inline-block bg-orange-100 rounded-full px-3 py-1 text-xs font-semibold text-orange-500 mr-2 mb-2'>
							{roomAvailability.available}
						</span>
					</p>
					<p className='text-orange-600 text-lg font-bold mx-2'>
						Total:{' '}
						<span className='inline-block bg-orange-100 rounded-full px-3 py-1 text-xs font-semibold text-orange-500 mr-2 mb-2'>
							{roomAvailability.total}
						</span>
					</p>
				</div>

				<div className='pt-4 py-6'>
					<p className='text-orange-600 text-2xl font-bold mb-4'>Facilities</p>
					{thisRoom.facilities?.map(tag => (
						<span
							key={tag.id}
							className='inline-block bg-orange-100 rounded-full px-3 py-1 text-xs font-semibold text-orange-500 mr-2 mb-2'
						>
							{tag.label}
						</span>
					))}
				</div>
			</div>
		</section>
	)
}

export default SingleRoom
