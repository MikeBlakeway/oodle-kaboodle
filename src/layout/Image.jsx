import React from 'react'
import {onImageError} from '../utils/onImageError'
import ErrorImage from '../assets/blank-profile-picture.jpeg'

function Image({srcURI, altText, className = 'w-full aspect-video'}) {
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

export default Image
