import React from 'react'
import {onImageError} from '../utils/onImageError'
import ErrorImage from '../assets/blank-profile-picture.jpeg'

const Hero = ({title, prose}) => {
	return (
		<section className='text-slate-600 body-font'>
			<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
				<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-600 capitalize'>
						{title}
					</h1>
					<p className='mb-8 leading-relaxed'>{prose}</p>
				</div>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'></div>
			</div>
		</section>
	)
}

export const ImageComponent = ({
	srcURI,
	altText,
	className = 'w-full aspect-video',
}) => {
	/**
	 * this is a terniary operator. It is shorthand for if/else.
	 * We want to check that a valid image url has been provided,
	 * or else we should render a placeholder image
	 */
	const returnedImage = !srcURI ? (
		<img
			alt={'Not found'}
			src={ErrorImage}
			className={className}
			onError={e => onImageError(e)}
		/>
	) : (
		<img
			alt={altText}
			src={srcURI}
			className={className}
			onError={e => onImageError(e)}
		/>
	)

	return returnedImage
}

export default Hero
