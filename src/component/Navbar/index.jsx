import { Link } from 'react-router-dom'

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
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/about'>About Us</Link>
							</li>

							<li>
								<Link to='/shop'>Shop</Link>
							</li>
							<li>
								<Link to='/menu'>Menus</Link>
							</li>
							<li>
								<Link to='/contacts'>Contacts</Link>
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
