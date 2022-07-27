import AboutArea from 'containers/AboutArea'
import BannerArea from 'containers/BannerArea'
import IntroContact from 'containers/IntroContact'
import OfferArea from 'containers/OfferArea'
import ProductArea from 'containers/ProductArea'
import TestimonialArea from 'containers/TestimonialArea'

import InstagramArea from 'containers/InstagramArea'
import ImgText from 'containers/ImgText'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
	const navigate = useNavigate()
	return (
		<div>
			<BannerArea />
			<IntroContact />
			<AboutArea />
			<OfferArea />
			<ProductArea />
			<TestimonialArea />
			<ImgText
				titleTop={'Why choose us'}
				title={'We Have Excellent Of Quality Japanese Food'}
				text={
					'A, blandit euismod ullamcorper vestibulum enim habitasse. Ultrices tincidunt scelerisque elit enim. A neque malesuada in tortor eget justo mauris nec dolor. Consequat risus vitae, ac ac et preparation. He wanted to serve burgers, fries and beverages that tasted .'
				}
				img={'assets/img//home-2/about/1.png'}
				buttonTitle={'CHECK OUR MENU'}
				buttonFunc={() => navigate('/menu')}
			/>
			<InstagramArea />
		</div>
	)
}

export default HomePage
