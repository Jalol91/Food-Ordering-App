const Navbar = () => {
	return (
		<header className='navbar-area navbar-area-2'>
			<nav className='navbar navbar-expand-lg'>
				<div className='container nav-container'>
					<div className='responsive-mobile-menu'>
						<button
							className='menu toggle-btn d-block d-lg-none'
							data-target='#themefie_main_menu'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span className='icon-left' />
							<span className='icon-right' />
						</button>
					</div>
					<div className='logo'>
						<a className='main-logo' href='home-1.html'>
							<img src='assets/img//home-2/logo.png' alt='img' />
						</a>
					</div>
					<div className='collapse navbar-collapse' id='themefie_main_menu'>
						<ul className='navbar-nav menu-open'>
							<li className='current-menu-item menu-item-has-children'>
								<a href='home-1.html'>HOME</a>
								<ul className='sub-menu ps-0'>
									<li>
										<a href='home-1.html'>Home 01</a>
									</li>
									<li>
										<a href='home-2.html'>Home 02</a>
									</li>
									<li>
										<a href='home-3.html'>Home 03</a>
									</li>
								</ul>
							</li>
							<li className='current-menu-item menu-item-has-children'>
								<a href='#'>PAGES</a>
								<ul className='sub-menu ps-0'>
									<li>
										<a href='about.html'>About</a>
									</li>
									<li>
										<a href='blog.html'>Blog</a>
									</li>
									<li>
										<a href='blog-details.html'>Blog Details</a>
									</li>
									<li>
										<a href='menu.html'>Menu</a>
									</li>
									<li>
										<a href='menu-list.html'>Menu List</a>
									</li>
									<li>
										<a href='shop.html'>Shop</a>
									</li>
									<li>
										<a href='single-product.html'>Shop Details</a>
									</li>
									<li>
										<a href='cart.html'>Cart</a>
									</li>
									<li>
										<a href='checkout.html'>Checkout</a>
									</li>
								</ul>
							</li>
							<li>
								<a href='about.html'>ABOUT US</a>
							</li>
							<li>
								<a href='contact.html'>CONTACTS</a>
							</li>
						</ul>
					</div>
					<div className='nav-right-part nav-right-part-mobile'>
						<ul>
							<li>
								<a className='search' href='#'>
									<i className='ri-search-line' />
								</a>
							</li>
							<li className='phone-contact d-md-block d-none'>
								<i className='ri-phone-fill float-start' />
								+997 509 153 849
							</li>
							<li className='menu-cart'>
								<a href='cart.html'>
									CART <span>1</span>
								</a>
							</li>
							<li>49.50 $</li>
						</ul>
					</div>
					<div className='nav-right-part nav-right-part-desktop'>
						<ul>
							<li className='menu-cart'>
								<a href='cart.html'>
									<img
										src='assets/img/home-2/icon/shopping-cart.png'
										alt='icon'
									/>{' '}
									<span>1</span>
								</a>
							</li>
							<li>49.50 $</li>
							<li className='phone-contact'>
								<img
									className='me-2'
									src='assets/img/home-2/icon/phone.png'
									alt='icon'
								/>
								+997 509 153 849
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
