import AboutArea from 'containers/AboutArea'
import BannerArea from 'containers/BannerArea'
import IntroContact from 'containers/IntroContact'
import OfferArea from 'containers/OfferArea'
import ProductArea from 'containers/ProductArea'
import TestimonialArea from 'containers/TestimonialArea'
import AboutArea2 from 'containers/AboutArea2'
import InstagramArea from 'containers/InstagramArea'
const HomePage = () => {
	return (
		<div>
			<BannerArea />
			<IntroContact />
			<AboutArea />
			<OfferArea />
			<ProductArea />
			<TestimonialArea />
			<AboutArea2 />
			<InstagramArea />
		</div>
	)
}

export default HomePage
