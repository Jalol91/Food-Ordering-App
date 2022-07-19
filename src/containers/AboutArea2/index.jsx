const AboutArea2 = () => {
	return (
		<section
			className='about-area pd-top-120 pd-bottom-90'
			style={{
				backgroundImage: 'url(assets/img/home-2/about/bg.png)',
				backgroundColor: '#FAF7F2',
			}}>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-6'>
						<div className='about-default-thumb'>
							<img src='assets/img//home-2/about/1.png' alt='img' />
						</div>
					</div>
					<div className='col-lg-6 col-md-10 order-lg-first align-self-center'>
						<div className='section-title text-lg-start text-center'>
							<h3 className='sub-title'>Why choose us</h3>
							<h2 className='title'>
								We Have Excellent Of Quality Japanese Food
							</h2>
							<p>
								A, blandit euismod ullamcorper vestibulum enim habitasse.
								Ultrices tincidunt scelerisque elit enim. A neque malesuada in
								tortor eget justo mauris nec dolor. Consequat risus vitae, ac ac
								et preparation. He wanted to serve burgers, fries and beverages
								that tasted .
							</p>
							<a className='btn btn-secondary' href='menu-list.html'>
								CHECK OUR MENU
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default AboutArea2
