import BreadCrumb from 'component/BreadCrumb'
import ImgText from 'containers/ImgText'
import AboutArea from 'containers/AboutArea'

const AboutPage = () => {
	return (
		<div>
			<div>
				{/* bredcrumb Area Start*/}
				<BreadCrumb titleTop={'About us'} title={'Who we are?'} url={'About'} />
				{/* bredcrumb Area End */}
				{/* about Area Start*/}
				<ImgText
					titleTop={'Our History'}
					title={'Origins of the restaurant'}
					text={`Sharing knowledge and skills is what we do. With passion.
										That’s why the Alimentarium organises daily culinary
										workshops and classes led by qualified chefs. A neque
										malesuada in tortor eget justo mauris nec dolor. Consequat
										risus vitae, ac ac et preparation.`}
					img={'assets/img/other/about-2.png'}
					bgColor={'white'}
				/>
				<AboutArea />
				{/* about Area End */}
				{/* about Area Start*/}

				{/* about Area End */}
				{/* video Area Start*/}
				<section
					className='video-area featured-area pd-bottom-150'
					style={{ backgroundImage: 'url(assets/img/other/video.png)' }}>
					<div className='overlay' />
					<div className='container'>
						<div className='row'>
							<div className='col-lg-6'>
								<div className='section-title text-lg-start text-center'>
									<h3 className='sub-title text-secondary'>Why choose us</h3>
									<h2 className='title text-white'>
										Visit our kitchens to see how we prepare your favorite dish
									</h2>
								</div>
							</div>
							<div className='col-lg-6 align-self-center text-center'>
								<a className='play-btn' href='#'>
									<i className='ri-play-circle-fill' />
								</a>
							</div>
						</div>
					</div>
				</section>
				{/* video Area End */}
				{/* testimonial Area Start*/}
				<section className='testimonial-area text-center'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-7 col-md-10'>
								<div className='testimonial-slider owl-carousel'>
									<div className='item'>
										<div className='testimonial-wrap'>
											<p>
												“We have no regrets! I don't know what else to say. It
												really saves me time and effort. Food is exactly what
												our business has been lacking”
											</p>
											<h3>Julia R. Davis</h3>
											<h6>Food Bloger</h6>
										</div>
									</div>
									<div className='item'>
										<div className='testimonial-wrap'>
											<p>
												“We have no regrets! I don't know what else to say. It
												really saves me time and effort. Food is exactly what
												our business has been lacking”
											</p>
											<h3>Davis J. Rulia</h3>
											<h6>Food Bloger</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* testimonial Area End */}
				{/* blog Area Start*/}
			</div>
		</div>
	)
}

export default AboutPage
