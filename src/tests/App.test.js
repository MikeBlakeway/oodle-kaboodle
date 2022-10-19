import {render, screen} from '@testing-library/react'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import App from '../App'

describe('Testing App routing', () => {
	it('renders the Landing page by default', () => {
		render(<App />, {wrapper: BrowserRouter})

		expect(screen.getByText(/Oodle Kabooble/i)).toBeInTheDocument()
	})
	it('routes to the hotels page with a provided id', () => {
		const mockRoute = '/hotels/65'

		// use <MemoryRouter> when you want to manually control the history
		render(
			<MemoryRouter initialEntries={[mockRoute]}>
				<App />
			</MemoryRouter>
		)

		const expectedResponse = 'Hotel Garni Almhof - In Town - Central Mayrhofen'

		// verify navigation to hotels route
		expect(screen.getByText(expectedResponse)).toBeInTheDocument()
	})
	it('routes to the rooms page with a provided roomId', () => {
		const mockRoute = '/hotels/65/rooms/130'

		// use <MemoryRouter> when you want to manually control the history
		render(
			<MemoryRouter initialEntries={[mockRoute]}>
				<App />
			</MemoryRouter>
		)

		// verify navigation to hotels route
		screen.getByText((content, element) => {
			return element.tagName.toLowerCase() === 'h2' && content.startsWith('Triple')
		})
	})
	it('routes to the 404 page', () => {
		const badRoute = '/some/bad/route'

		// use <MemoryRouter> when you want to manually control the history
		render(
			<MemoryRouter initialEntries={[badRoute]}>
				<App />
			</MemoryRouter>
		)

		// verify navigation to "Not Found" route
		expect(screen.getByText(/404/i)).toBeInTheDocument()
	})
})
