const Footer = () => {
	return (
		<footer className='footer-area-2 pd-top-100'>
			<div className='footer-inner padding-top-100 padding-bottom-65'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 col-sm-6'>
							<div className='footer-widget widget'>
								<div className='logo'>
									<img src='assets/img/home-2/logo.png' alt='img' />
								</div>
								<ul className='contact_info_list'>
									<li className='single-info-item'>
										<img src='assets/img/icon/location.png' alt='icon' />
										<div className='details'>
											4920 Trails End Road Ft United States, FL 33311
										</div>
									</li>
									<li className='single-info-item'>
										<img src='assets/img/icon/envelope.png' alt='icon' />
										<div className='details'>ordernow@foodka.com</div>
									</li>
									<li className='single-info-item'>
										<img src='assets/img/icon/phone.png' alt='icon' />
										<div className='details'>+997 509 153 849</div>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6'>
							<div className='footer-widget widget widget_link'>
								<h4 className='widget-title'>Hot Menu</h4>
								<ul>
									<li>
										<a href='menu-list.html'>Burger King Whopper</a>
									</li>
									<li>
										<a href='menu-list.html'>Five Guys Cheeseburger</a>
									</li>
									<li>
										<a href='menu-list.html'>KFC Original Recipe Chicken</a>
									</li>
									<li>
										<a href='menu-list.html'>Wendy's Frosty</a>
									</li>
									<li>
										<a href='menu-list.html'>McDonald's Happy Meal</a>
									</li>
									<li>
										<a href='menu-list.html'>Domino's Pepperoni Pizza</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6'>
							<div className='footer-widget widget widget_link'>
								<h4 className='widget-title'>Opening Hours</h4>
								<ul>
									<li>Monday : 09.00am-10.00pm</li>
									<li>Tuesday : 09.00am-10.00pm</li>
									<li>Wednesday : 09.00am-10.00pm</li>
									<li>Thursday : 09.00am-10.00pm</li>
									<li>Friday : 09.00am-10.00pm</li>
									<li>
										Saturday &amp; Sunday : <span>Closed</span>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-lg-3 col-sm-6'>
							<div className='footer-widget widget widget-newsletter'>
								<h4 className='widget-title'>Newsletter</h4>
								<p>
									Subscribe to get the latest news, update and offer
									information. Don't worry, we won't send spam!
								</p>
								<form className='newsletter-form'>
									<div className='form-group'>
										<input type='email' placeholder='Enter e-mail' />
									</div>
									<button className='submit-btn' type='submit'>
										<i className='ri-arrow-right-line' />
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-md-6 text-md-start text-center'>
							<div className='copyright-area'>
								<p>© 2021 Foodka. All Rights Reserved by Themefie</p>
							</div>
						</div>
						<div className='col-md-6'>
							<ul className='social-area text-md-end text-center mt-md-0 mt-2'>
								<li>
									<a href='#'>
										<i className='fab fa-facebook-f' />
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='fab fa-twitter' />
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='fab fa-behance' />
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='fab fa-google-plus-g' />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
