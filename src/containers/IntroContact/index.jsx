import IntroCard from '../../component/IntroCard'

const IntroContact = () => {
	return (
		<section className='intro-contact-area pd-bottom-90'>
			<div className='container'>
				<div className='row justify-content-center'>
					<IntroCard
						icon={'assets/img/home-2/icon/calendar.png'}
						title={'Mon-fri : 10AM -9:30PM'}
						text={'Working Hours'}
					/>
					<IntroCard
						icon={'assets/img/home-2/icon/map-marker.png'}
						title={'Trails End Road Ft United States'}
						text={'Store Location'}
					/>

					<IntroCard
						icon={'assets/img/home-2/icon/phone-2.png'}
						title={'+997 509 153 849'}
						text={'Working Hours'}
					/>
				</div>
			</div>
		</section>
	)
}
export default IntroContact
