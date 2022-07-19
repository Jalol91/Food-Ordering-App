const TitleArea = ({ topTitle, title, text }) => {
	return (
		<div className='banner-inner'>
			<h3>{topTitle}t</h3>
			<h1>{title}</h1>
			<p>{text}</p>
			<a className='btn btn-secondary' href='shop.html'>
				GET IT NOW
			</a>
		</div>
	)
}
export default TitleArea
