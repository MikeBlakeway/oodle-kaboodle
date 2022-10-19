import React from 'react'
import {Link} from 'react-router-dom'

const HotelCard = ({hotel}) => {
	const {id, facilities, images, name, type} = hotel

	return (
		<Link
			to={`hotels/${id}`}
			className='max-w-sm rounded overflow-hidden shadow-lg'
		>
			<img className='w-full' src={images[0].filename} alt={images[0].alt} />
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2'>{name}</div>
				<p className='text-slate-700 text-base'>{type.name}</p>
			</div>
			<div className='px-6 pt-4 pb-2'>
				{facilities.map(tag => (
					<span
						key={tag.id}
						className='inline-block bg-orange-100 rounded-full px-3 py-1 text-xs font-semibold text-orange-500 mr-2 mb-2'
					>
						{tag.label}
					</span>
				))}
			</div>
		</Link>
	)
}

export default HotelCard
