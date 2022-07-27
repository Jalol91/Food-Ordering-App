import BreadCrumb from 'component/BreadCrumb'
import ContactFormContainer from 'component/ContactForm'

const ContactsPage = () => {
	return (
		<div>
			<div>
				<BreadCrumb
					titleTop={'Contact with Us'}
					title={'Contact'}
					url={'contact'}
				/>

				{/* bredcrumb Area End */}
				{/* contact start */}
				<div className='contact-area pd-top-120 pd-bottom-100'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-6'>
								<ul className='contact_info_list'>
									<li className='single-info-item'>
										<img src='assets/img/icon/location.png' alt='icon' />
										<div className='details'>
											4920 Trails End Road Ft United States, FL 33311
										</div>
									</li>
									<li className='single-info-item'>
										<img src='assets/img/icon/envelope.png' alt='icon' />
										<div className='details'>ordernow@foodka.com</div>
									</li>
									<li className='single-info-item'>
										<img src='assets/img/icon/phone.png' alt='icon' />
										<div className='details'>+997 509 153 849</div>
									</li>
								</ul>
								<p>
									We’re an award-winning creative design studio with a small
									team and big ideas. We pour passion into projects big and
									small, providing our expert clients with solutions.
								</p>
							</div>
							<ContactFormContainer />
						</div>
					</div>
				</div>
				{/* contact end */}
				<div className='location-map'>
					<div className='responsive-map'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7736.809349608943!2d90.34779195789959!3d23.772761841203913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1618491766114!5m2!1sen!2sbd'
							width={600}
							height={450}
							style={{ border: 0 }}
							allowFullScreen
							loading='lazy'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactsPage
