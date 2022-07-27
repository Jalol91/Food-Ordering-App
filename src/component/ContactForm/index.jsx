// import { useState } from 'react'
import { useForm } from 'react-hook-form'

const ContactFormContainer = () => {
	const { register, handleSubmit } = useForm()
	// const [values, setValues] = useState({
	// 	name: '',
	// 	email: '',
	// 	message: '',
	// })
	// const handleChange = (e) => { j
	// 	const { name, value } = e.target
	// 	setValues({
	// 		...values,
	// 		[name]: value,
	// 	})
	// }
	const submit = (data) => {
		console.log(data)
	}
	console.log(register)
	console.log(handleSubmit)
	return (
		<div className='col-lg-6'>
			<form
				onSubmit={handleSubmit(submit)}
				className='default-form-wrap border-0 p-0 mt-4 mt-lg-0'>
				<div className='row'>
					<div className='col-md6'>
						<div className='single-input-wrap'>
							<input
								{...register('name', { required: true })}
								// onChange={(e) => handleChange(e)}
								// value={}
								// name='name'
								type='text'
								className='form-control'
								placeholder='Your Name'
							/>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='single-input-wrap'>
							<input
								{...register('text', { required: true })}
								// onChange={(e) => handleChange(e)}
								// name='email'
								type='text'
								className='form-control'
								placeholder='Your Email'
							/>
						</div>
					</div>
					<div className='col-12'>
						<div className='single-textarea-wrap'>
							<textarea
								{...register('message', { required: true })}
								// onChange={(e) => handleChange(e)}
								// name='Message'
								rows={4}
								placeholder='Message...'
								defaultValue={''}
							/>
						</div>
					</div>
				</div>
				<button type='submit' className='btn btn-base'>
					Submit your Message
				</button>
			</form>
		</div>
	)
}
export default ContactFormContainer
