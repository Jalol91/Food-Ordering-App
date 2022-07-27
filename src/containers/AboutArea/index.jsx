const AboutArea = () => {
	const aboutArr = [
		{
			title: 'Fresh food',
			img: 'assets/img/icon/1.png',
		},
		{
			title: 'Fast Delivery',
			img: 'assets/img/icon/2.png',
		},
		{
			title: 'Quality Maintain',
			img: 'assets/img/icon/3.png',
		},
		{
			title: '24/7 Service',
			img: 'assets/img/icon/4.png',
		},
	]

	return (
		<section className='about-area pd-top-120 pd-bottom-90'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-6 col-md-8'>
						<div className='thumb mb-lg-0 mb-4'>
							<img src='assets/img/other/about.png' alt='img' />
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='section-title text-lg-start text-center'>
							<h3 className='sub-title'>Why choose us</h3>
							<h2 className='title'>Why we are the best</h2>
							<p>
								A, blandit euismod ullamcorper vestibulum enim habitasse.
								Ultrices tincidunt scelerisque elit enim. A neque malesuada in
								tortor eget justo mauris nec dolor. Consequat risus vitae, ac ac
								et preparation. He wanted to serve burgers, fries and beverages
								that tasted .
							</p>
						</div>
						<div className='row'>
							{aboutArr.map((item, index) => (
								<div className='col-sm-6'>
									<div key={index} className='single-about-wrap style-2'>
										<img src={item.img} />
										{item.title}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default AboutArea
