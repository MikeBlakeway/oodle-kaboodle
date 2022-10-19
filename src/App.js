import * as React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Layout} from './layout'
import {Landing, SingleHotel, NotFound, SingleRoom} from './pages'

export const App = () => (
	/**
	 * here we control routing from the entry level component each route returns the appropriate component depending on the path provided.
	 * Where no path is listed, a catch all is provided in path=* which will return a 404 page
	 **/
	<Routes>
		<Route path='/' element={<Layout />}>
			<Route index element={<Landing />} />
			<Route exact path='/hotels/:id' element={<SingleHotel />} />
			<Route exact path='/hotels/:id/rooms/:roomId' element={<SingleRoom />} />

			<Route path='*' element={<NotFound />} />
		</Route>
	</Routes>
)

export default App
