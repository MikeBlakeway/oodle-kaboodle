import React from 'react'

const Primary = ({text}) => {
	return (
		<a
			className='inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
			data-mdb-ripple='true'
			data-mdb-ripple-color='light'
			href='#!'
			role='button'
		>
			{text}
		</a>
	)
}

const Secondary = ({text}) => {
	return (
		<a
			className='inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out'
			data-mdb-ripple='true'
			data-mdb-ripple-color='light'
			href='#!'
			role='button'
		>
			{text}
		</a>
	)
}

export const Button = {Primary, Secondary}

export default Button
