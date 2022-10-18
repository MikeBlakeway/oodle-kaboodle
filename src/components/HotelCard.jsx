import React from 'react'

const HotelCard = ({hotel}) => {
	const {
		id,
		address_1,
		address_2,
		country,
		description,
		facilities,
		images,
		location,
		name,
		postcode,
		rating,
		resort,
		rooms,
		type,
	} = hotel
	return (
		<div
			className='relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg'
			data-mdb-ripple='true'
			data-mdb-ripple-color='light'
		>
			<img src={images[0].filename} alt={images[0].alt} className='w-full' />
			<a href='#!'>
				<div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed'>
					<div className='flex justify-start items-end h-full'>
						<div className='text-white m-6'>
							<h5 className='font-bold text-lg mb-3'>{name}</h5>
							<p>
								<small>{resort.name}</small>
							</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	)
}

export default HotelCard
