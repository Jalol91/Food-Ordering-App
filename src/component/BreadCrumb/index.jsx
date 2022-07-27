import { Link } from 'react-router-dom'

const BreadCrumb = ({ titleTop, title, url }) => {
	return (
		<section className='breadcrumb-area'>
			<div className='banner-bg-img' />
			<div className='banner-shape-1'>
				<img src='assets/img/banner/shape-1.png' alt='img' />
			</div>
			<div className='banner-shape-2'>
				<img src='assets/img/banner/shape-2.png' alt='img' />
			</div>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-6 align-self-center'>
						<div className='banner-inner text-center'>
							<h3>{titleTop}</h3>
							<h1>{title}</h1>
							<nav aria-label='breadcrumb'>
								<ul className='breadcrumb'>
									<li className='breadcrumb-item'>
										<Link to='/'>Home</Link>
									</li>
									<li className='breadcrumb-item active' aria-current='page'>
										{url}
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default BreadCrumb
