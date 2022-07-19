const OfferArea = () => {
	return (
		<section className='offer-area pd-bottom-90'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-md-12 align-self-center d-contents'>
						<div
							className='single-offer-wrap single-offer-wrap-2'
							style={{ backgroundColor: 'var(--secondary-color)' }}>
							<img
								className='bg-img'
								src='assets/img/home-2/offer/1.png'
								alt='img'
							/>
							<div className='wrap-details'>
								<h4>Double Cheese</h4>
								<h1>BURGER </h1>
								<p>With Free Cocacola. Stay home , we deliver</p>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 align-self-center'>
						<div
							className='single-offer-wrap single-offer-wrap-3'
							style={{ backgroundColor: '#000' }}>
							<img
								className='bg-img'
								src='assets/img/home-2/offer/2.png'
								alt='img'
							/>
							<div className='wrap-details'>
								<h3>Enjoy 30% CashBack</h3>
								<span>Up to $70 on all Bikash</span>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 align-self-center'>
						<div
							className='single-offer-wrap single-offer-wrap-4'
							style={{ backgroundColor: '#F8F7F2' }}>
							<img
								className='bg-img'
								src='assets/img/home-2/offer/3.png'
								alt='img'
							/>
							<div className='wrap-details text-center'>
								<h3>
									<span>25 EXTRA</span>
									FREE ON KFC
								</h3>
								<p>Stay home , we deliver</p>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 align-self-center'>
						<div
							className='single-offer-wrap single-offer-wrap-5'
							style={{ background: '#39251D' }}>
							<img
								className='bg-img'
								src='assets/img/home-2/offer/4.png'
								alt='img'
							/>
							<div className='wrap-details'>
								<h5>Test with</h5>
								<h3>
									<span>JAPANESE</span>FOOD AT HOME
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default OfferArea
