import { categoriyData } from 'data/category'
import { productData } from 'data/product'

const ProductArea = () => {
	return (
		<section className='product-area pd-bottom-90'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12'>
						<div className='section-title text-center'>
							<h3 className='sub-title'>Our signature</h3>
							<h2 className='title'>Delicious Deals for Delicious Meals</h2>
						</div>
						<ul
							className='product-nav style-2 nav nav-pills'
							id='pills-tab'
							role='tablist'>
							{categoriyData.map((item, index) => (
								<li key={index} className='nav-item' role='presentation'>
									<button
										className={`nav-link ${index === 0 ? 'active' : ''}`}
										id={`pills-${item.id}-tab`}
										data-bs-toggle='pill'
										data-bs-target={`#pills-${item.id}`}
										type='button'
										role='tab'
										aria-controls={`pills-${item.id}`}
										aria-selected={index === 0 ? 'true' : 'false'}>
										<img src={item.img} alt='img' />
										{item.title}
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='tab-content' id='pills-tabContent'>
					{categoriyData.map((categoriy, index) => (
						<div
							key={index}
							className={`tab-pane fade show ${index === 0 ? 'active' : ''}`}
							id={`pills-${categoriy.id}`}
							role='tabpanel'
							aria-labelledby={`pills-${categoriy}-tab`}>
							<div className='row justify-content-center'>
								{productData
									.filter((item) => item.categoryiD === categoriy.id)
									.map((product, index) => (
										<div key={index} className='col-xl-3 col-lg-4 col-md-6'>
											<div className='single-item-wrap style-2'>
												<div className='thumb'>
													<img src={product.img} alt='img' />
													<a className='fav-btn' href='#'>
														<i className='ri-heart-fill' />
													</a>
												</div>
												<div className='wrap-details'>
													<h5>
														<a href='single-product.html'>{product.title}</a>
													</h5>
													<div className='wrap-footer'>
														<div className='rating'>
															{product.rating}
															<span className='rating-inner'>
																<i className='ri-star-fill ps-0' />
																<i className='ri-star-fill' />
																<i className='ri-star-fill' />
																<i className='ri-star-fill' />
																<i className='ri-star-half-line pe-0' />
															</span>
															{product.totalRating}
														</div>
													</div>
													<div className='btn-area'>
														<h6 className='price'>{product.price}</h6>
														<a
															className='btn btn-secondary'
															href='single-product.html'>
															Add to cart <i className='ri-add-line' />
														</a>
													</div>
												</div>
											</div>
										</div>
									))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default ProductArea
