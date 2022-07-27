import { useState } from 'react'
import ReactSlider from 'react-slider'
import './index.css'

const PriceByFilter = () => {
	const [state, setState] = useState({
		valueNow: 30,
	})
	return (
		<div className='widget widget_filter'>
			<h4 className='widget-title'>Filter by Price</h4>
			<div className='side-bar-range'>
				<ReactSlider
					className='horizontal-slider'
					thumbClassName='example-thumb'
					trackClassName='example-track'
					defaultValue={[0, 100]}
					ariaLabel={['Lower thumb', 'Upper thumb']}
					ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
					renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
					pearling
					minDistance={10}
				/>
				{/* <div className='row g-0'>
					<div className='col-lg-6 align-self-center'>
						<a className='btn btn-base' href='#'>
							Filter
						</a>
					</div>
					<div className='col-lg-6 align-self-center'>
						<p>
							Price:
							<input type='text' id='amount' readOnly />
						</p>
					</div>
				</div> */}
			</div>
		</div>
	)
}
export default PriceByFilter
