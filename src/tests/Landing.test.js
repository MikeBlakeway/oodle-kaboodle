import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import {Landing} from '../pages'

describe('Testing Landing component', () => {
	it('renders the Landing component', () => {
		render(<Landing />, {wrapper: BrowserRouter})

		expect(screen.getByText(/Oodle Kabooble/i)).toBeInTheDocument()
	})
})
