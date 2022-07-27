const ImgText = ({
	titleTop,
	title,
	text,
	buttonTitle,
	buttonFunc,
	img,
	bgColor,
}) => {
	return (
		<section
			className='about-area pd-top-120 pd-bottom-90'
			style={{
				backgroundImage: 'url(assets/img/home-2/about/bg.png)',

				backgroundColor: bgColor ? bgColor : '#FAF7F2',
			}}>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-6'>
						<div className='about-default-thumb p-5'>
							<img src={img} alt='img' />
						</div>
					</div>
					<div className='col-lg-6 col-md-10 order-lg-first align-self-center'>
						<div className='section-title text-lg-start text-center'>
							<h3 className='sub-title'>{titleTop}</h3>
							<h2 className='title'>{title}</h2>
							<p>{text}</p>

							{buttonTitle && (
								<div onClick={() => buttonFunc()} className='btn btn-secondary'>
									{buttonTitle}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default ImgText
