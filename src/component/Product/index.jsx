import { Link } from 'react-router-dom'

const Product = ({ item }) => {
	return (
		<div className='col-md-6'>
			<div className='single-item-wrap'>
				<div className='thumb'>
					<img src='assets/img/product/pizza/1.png' alt='img' />
					<a className='fav-btn' href='#'>
						<i className='ri-heart-line' />
					</a>
				</div>
				<div className='wrap-details'>
					<h5>
						<Link to={`/shop/${item.slug}`} href='single-product.html'>
							{item.title}
						</Link>
					</h5>
					<div className='wrap-footer'>
						<div className='rating'>
							{item.rating}
							<span className='rating-inner'>
								<i className='ri-star-fill ps-0' />
								<i className='ri-star-fill' />
								<i className='ri-star-fill' />
								<i className='ri-star-fill' />
								<i className='ri-star-half-line pe-0' />
							</span>
							{item.totalRating}
						</div>
						<h6 className='price'>{item.price}</h6>
					</div>
				</div>
				<div className='btn-area'>
					<Link
						to={`/shop/${item.slug}`}
						className='btn btn-secondary'
						href='single-product.html'>
						CHOOSE OPTIONS{' '}
					</Link>
				</div>
			</div>
		</div>
	)
}
export default Product
