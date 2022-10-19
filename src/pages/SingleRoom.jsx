import React from 'react'
import {useParams} from 'react-router-dom'
import {Image} from '../layout'
import hotels from '../data/accommodation.json'
import availability from '../data/accommodation_availability.json'

export const SingleRoom = () => {
	const {id, roomId} = useParams()
	const hotelById = hotels.accommodations.find(hotels => hotels.id === +id)
	const thisRoom = hotelById.rooms.find(room => room.id === +roomId)
	const roomAvailability = availability.rooms.find(room => room.id === +roomId)
	console.log(thisRoom)

	return (
		<section className='px-12'>
			<div className='container mx-auto grid grid-cols-2 gap-4 place-items-center'>
				<h2 className='text-orange-600 text-3xl font-bold mt-4'>
					<p>{thisRoom.name}</p>
				</h2>

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
