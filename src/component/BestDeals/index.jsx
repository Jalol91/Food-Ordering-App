import { productData } from 'data/product'
const BestDeals = () => {
	return (
		<div className='widget widget-recent-post style-2'>
			<h4 className='widget-title'>Today’s Best Deals</h4>
			<ul>
				{productData.slice(0, 4).map((item, index) => (
					<li key={index}>
						<div className='media'>
							<div className='media-left'>
								<img
									style={{
										height: '100px',
										width: '100px',
									}}
									src={item.img}
									alt='widget'
								/>
							</div>
							<div className='media-body'>
								<h6 className='title'>
									<a href='#'>{item.title}</a>
								</h6>
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
					</li>
				))}
			</ul>
		</div>
	)
}
export default BestDeals
