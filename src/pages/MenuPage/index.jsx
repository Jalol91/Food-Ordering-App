import { productData } from 'data/product'
import BreadCrumb from 'component/BreadCrumb'

const MenuPage = () => {
	return (
		<div>
			<div>
				<BreadCrumb
					titleTop={'Choose you items'}
					title={'Discover Our menu'}
					url={'menu'}
				/>

				{/* bredcrumb Area End */}
				{/* populer Area Start*/}
				<section className='populer-area pd-top-50 pd-bottom-120'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-5 col-md-8'>
								<div className='section-title text-center'>
									<h3 className='sub-title'>Our signature</h3>
									<h2 className='title'>Foodka Main Dishes</h2>
									<p>
										Amet amet parturient sed posuere vulputate pharetra a
										sapien, habitant. Enim vel elit pharetra.
									</p>
								</div>
							</div>
						</div>
						<div className='row justify-content-center'>
							{productData.map((item, index) => (
								<div key={index} className='col-lg-6'>
									<div className='single-item-wrap style-2'>
										<div className='media'>
											<div className='thumb'>
												<img src={item.img} alt='img' />
											</div>
											<div className='wrap-details'>
												<h5>
													<a href='single-product.html'>{item.title}</a>
												</h5>
												<p>{item.text}</p>
												<div className='wrap-footer'>
													<h6 className='price'>{item.price}</h6>
													<button type='submit' className='btn btn-secondary'>
														ADD TO CART
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}

							{/* <div className='col-12'>
								<nav>
									<ul className='pagination'>
										<li className='page-item'>
											<a className='page-link' href='#'>
												<i className='ri-arrow-left-s-line' />
											</a>
										</li>
										<li className='page-item active'>
											<a className='page-link' href='#'>
												1
											</a>
										</li>
										<li className='page-item'>
											<a className='page-link' href='#'>
												2
											</a>
										</li>
										<li className='page-item'>
											<a className='page-link' href='#'>
												3
											</a>
										</li>
										<li className='page-item'>
											<a className='page-link' href='#'>
												<i className='ri-arrow-right-s-line' />
											</a>
										</li>
									</ul>
								</nav>
							</div> */}
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default MenuPage
