import BestDeals from 'component/BestDeals'
import CategoryFilter from 'component/CategoryFilter'
import PriceByFilter from 'component/PriceByFilter'
import Product from 'component/Product'
import { productData } from 'data/product'
import BreadCrumb from 'component/BreadCrumb'

const ShopPage = () => {
	return (
		<div>
			<div>
				<BreadCrumb
					titleTop={'Choose you items'}
					title={'SHOP PAGE'}
					url={'Shop'}
				/>
				{/* breadcrumb Area End */}
				{/* shop Area Start*/}
				<section className='shop-area pd-top-120 pd-bottom-120'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-8'>
								<div className='row justify-content-center'>
									<div className='col-sm-6 align-self-center pb-4'>
										<p className='mb-0'>Showing 1–8 of 12 results</p>
									</div>
									<div className='col-sm-6 align-self-center pb-4'>
										<select className='single-select float-sm-end'>
											<option>Default sorting</option>
											<option value='asc'>Pizza</option>
											<option value='desc'>Burger</option>
											<option value='pop'>Ramen</option>
										</select>
									</div>
									{productData.map((item, index) => (
										<Product key={index} item={item} />
									))}
								</div>
							</div>
							<div className='col-lg-4 order-lg-first'>
								<div className='sidebar-area'>
									<div className='widget widget_search'>
										<form className='search-form'>
											<div className='form-group'>
												<input type='text' placeholder='Search your itmes' />
											</div>
											<button className='submit-btn' type='submit'>
												<i className='ri-search-line' />
											</button>
										</form>
									</div>
									<CategoryFilter />
									<PriceByFilter />
									<BestDeals />
									<a className='d-block mb-5' href='#'>
										<img
											className='w-100'
											src='assets/img/widget/ad.png'
											alt='img'
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default ShopPage
