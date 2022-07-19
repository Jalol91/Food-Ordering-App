const IntroCard = ({ icon, title, text }) => {
	return (
		<div className='col-lg-4 col-md-6'>
			<div className='single-intro-contact-wrap'>
				<img src={icon} />
				<h5>{title}</h5>
				<p>{text}</p>
			</div>
		</div>
	)
}

export default IntroCard
