import React from 'react'

const RoomsListing = ({rooms}) => {
	return (
		<>
			<div className='grid grid-cols-2 gap-6'>
				{rooms.map(({id, max_occupancy, min_occupancy, number_of_nights, name}) => (
					<div className='px-6 py-4'>
						<div className='font-bold text-xl text-orange-400 my-4'>{name}</div>
						<p className='text-slate-500 text-base'>
							Min Occupancy:
							<span className='inline-block bg-orange-100 rounded-full px-3 py-1 text-xs font-semibold text-orange-500 ml-2 mb-2'>
								{min_occupancy} persons
							</span>
						</p>
						<p className='text-slate-500 text-base'>
							Max Occupancy:
							<span className='inline-block bg-orange-100 rounded-full px-3 py-1 text-xs font-semibold text-orange-500 ml-2 mb-2'>
								{max_occupancy} persons
							</span>
						</p>
						<p className='text-slate-500 text-base'>
							Duration:
							<span className='inline-block bg-orange-100 rounded-full px-3 py-1 text-xs font-semibold text-orange-500 ml-2 mb-2'>
								{number_of_nights} days
							</span>
						</p>
					</div>
				))}
			</div>
			{/* <SingleRoom room={rooms} /> */}
		</>
	)
}

export default RoomsListing
