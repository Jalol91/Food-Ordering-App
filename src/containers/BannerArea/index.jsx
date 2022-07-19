import TitleArea from '../../component/TitleArea'

const BannerArea = () => {
	return (
		<section className='banner-area banner-area-2'>
			<div className='banner-thumb'>
				<img src='assets/img//home-2/banner/1.png' alt='img' />
			</div>
			<div className='banner-bg'>
				<div className='banner-bg-img' />
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 col-md-8 align-self-center'>
						<TitleArea
							topTitle={'Japanese Test'}
							title={'Different spice for a Different taste'}
							text={
								'You need not only Just Food Stalls with Persons but also specialized equipment start the Fast Food'
							}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
export default BannerArea
