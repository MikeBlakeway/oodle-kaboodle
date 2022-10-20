import React, {useContext} from 'react'
import {Image} from '../layout'
import HotelsContext from '../data/HotelsContext'
import {useParams} from 'react-router-dom'
import RoomsListing from '../features/RoomsListing'

export const SingleHotel = () => {
	const {id} = useParams()

	const {accommodations} = useContext(HotelsContext)
	const hotelById = accommodations.find(hotels => hotels.id === +id)

	return (
		<section className='px-12'>
			<div className='container mx-auto grid grid-cols-2 gap-4 place-items-center'>
				<h2 className='text-orange-600 text-3xl font-bold mt-4'>
					<p>{hotelById.name}</p>
				</h2>

				<Image
					altText={hotelById.images[0].alt}
					srcURI={hotelById.images[0].filename}
					className='w-full aspect-video shadow rounded-tl-[25px] rounded-br-[25px]'
				/>
			</div>
			<div className='container mx-auto pt-12 pb-6'>
				<p
					className='text-slate-600 text-base'
					dangerouslySetInnerHTML={{__html: hotelById.description}}
				></p>
			</div>
			<div className='pt-4 py-6'>
				<p className='text-orange-600 text-2xl font-bold mb-4'>Facilities</p>
				{hotelById.facilities.map(facility => (
					<span
						key={facility.id}
						className='inline-block bg-orange-100 rounded-full px-3 py-1 text-xs font-semibold text-orange-500 mr-2 mb-2'
					>
						{facility.label}
					</span>
				))}
			</div>
			<div className='pt-4 py-6'>
				<p className='text-orange-600 text-2xl font-bold mb-4'>Rooms</p>
				<RoomsListing rooms={hotelById.rooms} />
			</div>
		</section>
	)
}

export default SingleHotel
