import { categoriyData } from 'data/category'

const CategoryFilter = () => {
	const selectCategory = (id) => {
		alert(id)
	}
	return (
		<div className='widget widget_categories style-2'>
			<h4 className='widget-title'>Categories</h4>
			<ul>
				{categoriyData.map((item, index) => (
					<li key={index}>
						<div onClick={() => selectCategory(item.id)}>
							<img src={item.img} alt='img' /> {item.title} <span>(5)</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CategoryFilter
