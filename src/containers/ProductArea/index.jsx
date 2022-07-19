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
							<li className='nav-item' role='presentation'>
								<button
									className='nav-link active'
									id='pills-ramen-tab'
									data-bs-toggle='pill'
									data-bs-target='#pills-ramen'
									type='button'
									role='tab'
									aria-controls='pills-ramen'
									aria-selected='true'>
									<img src='assets/img/category/1.png' alt='img' />
									Ramen
								</button>
							</li>
							<li className='nav-item' role='presentation'>
								<button
									className='nav-link'
									id='pills-pizza-tab'
									data-bs-toggle='pill'
									data-bs-target='#pills-pizza'
									type='button'
									role='tab'
									aria-controls='pills-pizza'
									aria-selected='false'>
									<img src='assets/img/category/2.png' alt='img' />
									Pizza
								</button>
							</li>
							<li className='nav-item' role='presentation'>
								<button
									className='nav-link'
									id='pills-burger-tab'
									data-bs-toggle='pill'
									data-bs-target='#pills-burger'
									type='button'
									role='tab'
									aria-controls='pills-burger'
									aria-selected='false'>
									<img src='assets/img/category/3.png' alt='img' />
									Burger
								</button>
							</li>
							<li className='nav-item' role='presentation'>
								<button
									className='nav-link'
									id='pills-french-fry-tab'
									data-bs-toggle='pill'
									data-bs-target='#pills-french-fry'
									type='button'
									role='tab'
									aria-controls='pills-french-fry'
									aria-selected='false'>
									<img src='assets/img/category/4.png' alt='img' />
									French fries
								</button>
							</li>
							<li className='nav-item' role='presentation'>
								<button
									className='nav-link'
									id='pills-fast-food-tab'
									data-bs-toggle='pill'
									data-bs-target='#pills-fast-food'
									type='button'
									role='tab'
									aria-controls='pills-fast-food'
									aria-selected='false'>
									<img src='assets/img/category/5.png' alt='img' />
									Fast food
								</button>
							</li>
							<li className='nav-item' role='presentation'>
								<button
									className='nav-link'
									id='pills-drinks-tab'
									data-bs-toggle='pill'
									data-bs-target='#pills-drinks'
									type='button'
									role='tab'
									aria-controls='pills-drinks'
									aria-selected='false'>
									<img src='assets/img/category/6.png' alt='img' />
									Soft drinks
								</button>
							</li>
						</ul>
					</div>
				</div>
				<div className='tab-content' id='pills-tabContent'>
					<div
						className='tab-pane fade show active'
						id='pills-ramen'
						role='tabpanel'
						aria-labelledby='pills-ramen-tab'>
						<div className='row justify-content-center'>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/01.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Double Burger</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/02.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Gulliver Burger</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/03.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Cheese Momos</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/04.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Patty Buns Burgers</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/05.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Margherita Pizza</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/06.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Maxican Pizza</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/07.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Garlic Chicken Pizza</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/08.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>BBQ Chicken Pizza </a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className='tab-pane fade'
						id='pills-pizza'
						role='tabpanel'
						aria-labelledby='pills-pizza-tab'>
						<div className='row justify-content-center'>
							<div className='col-lg-3 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/05.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Margherita Pizza</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-3 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/06.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Maxican Pizza</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-3 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/07.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Garlic Chicken Pizza</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-3 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/08.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>BBQ Chicken Pizza </a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className='tab-pane fade'
						id='pills-burger'
						role='tabpanel'
						aria-labelledby='pills-burger-tab'>
						<div className='row justify-content-center'>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/01.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Double Burger</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/02.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Gulliver Burger</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/03.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Cheese Momos</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/04.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Patty Buns Burgers</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className='tab-pane fade'
						id='pills-french-fry'
						role='tabpanel'
						aria-labelledby='pills-french-fry-tab'>
						<div className='row justify-content-center'>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/01.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Double Burger</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/02.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Gulliver Burger</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/03.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Cheese Momos</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/04.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Patty Buns Burgers</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className='tab-pane fade'
						id='pills-fast-food'
						role='tabpanel'
						aria-labelledby='pills-fast-food-tab'>
						<div className='row justify-content-center'>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/01.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Double Burger</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/02.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Gulliver Burger</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/03.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Cheese Momos</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/04.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Patty Buns Burgers</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className='tab-pane fade'
						id='pills-drinks'
						role='tabpanel'
						aria-labelledby='pills-drinks-tab'>
						<div className='row justify-content-center'>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/01.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Double Burger</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/02.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Gulliver Burger</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/03.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Cheese Momos</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-3 col-lg-4 col-md-6'>
								<div className='single-item-wrap style-2'>
									<div className='thumb'>
										<img src='assets/img/home-2/product/04.png' alt='img' />
										<a className='fav-btn' href='#'>
											<i className='ri-heart-fill' />
										</a>
									</div>
									<div className='wrap-details'>
										<h5>
											<a href='single-product.html'>Patty Buns Burgers</a>
										</h5>
										<div className='wrap-footer'>
											<div className='rating'>
												4.9
												<span className='rating-inner'>
													<i className='ri-star-fill ps-0' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-fill' />
													<i className='ri-star-half-line pe-0' />
												</span>
												(200)
											</div>
										</div>
										<div className='btn-area'>
											<h6 className='price'>$17.00</h6>
											<a
												className='btn btn-secondary'
												href='single-product.html'>
												Add to cart <i className='ri-add-line' />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default ProductArea
