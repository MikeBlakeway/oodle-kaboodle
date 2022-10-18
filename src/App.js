import Button from './components/Button'
import HotelListings from './components/HotelListings'
import hotels from './data/accommodation.json'
import rooms from './data/accommodation_availability.json'

function App() {
	return (
		<div className='container px-6'>
			<section className='mb-40'>
				<div className='px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left'>
					<div className='container mx-auto xl:px-32'>
						<div className='grid lg:grid-cols-2 gap-12 flex items-center'>
							<div className='mt-12 lg:mt-0'>
								<h1 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12'>
									Find your hotel <br />
									<span className='text-blue-600'>for we have lots</span>
								</h1>
								<Button.Primary text='Get started' />
								<Button.Secondary text='Learn More' />
							</div>
						</div>
					</div>
				</div>
			</section>
			<HotelListings hotels={hotels.accommodations} />
		</div>
	)
}

export default App
