import type { NextPage } from 'next';

const Contact: NextPage = () => {
	return (
		<>
			<div className="bg-primary my-5 w-screen">
        <div className="flex justify-center items-center flex-col py-20 text-white">
          <h1 className="font-extrabold text-4xl mb-3">Contact Us</h1>
        </div>
      </div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 mx-2 md:mx-20">
				<div className="flex justify-center items-stretch">
					<div className="flex flex-col items-center px-16 py-4 justify-center shadow-md rounded-3xl hover:bg-primary hover:text-white text-primary">
						<p className="mb-2"><i className='bx bxs-phone text-4xl' /></p>
						<p>+234 716 453 9847</p>
					</div>
				</div>
				<div className="flex justify-center items-stretch">
					<div className="flex flex-col items-center px-16 py-4 justify-center shadow-md rounded-3xl hover:bg-primary hover:text-white text-primary">
						<p className="mb-2"><i className='bx bx-current-location text-4xl' /></p>
						<p>Block 34, Olofinjana</p>
						<p>Crescent, Ikoyi, Lagos</p>
					</div>
				</div>
				<div className="flex justify-center items-stretch">
					<div className="flex flex-col items-center px-16 py-4 justify-center shadow-md rounded-3xl hover:bg-primary hover:text-white text-primary">
						<p className="mb-2"><i className='bx bx-paper-plane text-4xl' /> </p>
						<p>info@inventors.com.ng</p>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-16 mx-4 md:mx-40">
				<div className="mt-4 mx-4">
					<p className="font-bold text-primary">Get in touch.</p>
					<div className="font-extrabold text-3xl my-6">
						<p>Feel free to Send</p>
						<p>Us a Message</p>
					</div>
					<p className="text-gray-400">We would love to hear from you</p>
					<div className="flex mt-3">
						<div className="scale-50">
							<svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="33" cy="33" r="33" fill="#0489C7"/>
								<path d="M35.3283 47.995V34.335H39.9366L40.6216 28.9867H35.3283V25.58C35.3283 24.0367 35.7583 22.98 37.9733 22.98H40.78V18.2117C39.4144 18.0654 38.0417 17.9947 36.6683 18C32.595 18 29.7983 20.4867 29.7983 25.0517V28.9767H25.22V34.325H29.8083V47.995H35.3283Z" fill="white"/>
							</svg>
						</div>
						<div className="scale-50">
							<svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="33" cy="33" r="33" fill="#0489C7"/>
								<g clipPath="url(#clip0_305_543)">
								<path d="M25.7512 44.25H20.3091V26.7244H25.7512V44.25ZM23.0269 24.3338C21.2869 24.3338 19.875 22.8919 19.875 21.1519C19.875 20.3159 20.2071 19.5143 20.7982 18.9232C21.3893 18.3321 22.1909 18 23.0269 18C23.8628 18 24.6645 18.3321 25.2556 18.9232C25.8467 19.5143 26.1787 20.3159 26.1787 21.1519C26.1787 22.8919 24.7669 24.3338 23.0269 24.3338ZM46.1194 44.25H40.6894V35.7188C40.6894 33.6853 40.6481 31.0781 37.86 31.0781C35.0306 31.0781 34.5966 33.2869 34.5966 35.5725V44.25H29.16V26.7244H34.3791V29.115H34.455C35.1816 27.7378 36.9562 26.2847 39.6038 26.2847C45.1116 26.2847 46.1241 29.9119 46.1241 34.6228V44.25H46.1194Z" fill="white"/>
								</g>
								<defs>
								<clipPath id="clip0_305_543">
								<rect width="30" height="30" fill="white" transform="translate(18 18)"/>
								</clipPath>
								</defs>
							</svg>
						</div>
						<div className="scale-50">
							<svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="33" cy="33" r="33" fill="#0489C7"/>
								<path d="M33.0001 28.8344C30.7064 28.8344 28.8345 30.7063 28.8345 33C28.8345 35.2938 30.7064 37.1657 33.0001 37.1657C35.2939 37.1657 37.1658 35.2938 37.1658 33C37.1658 30.7063 35.2939 28.8344 33.0001 28.8344ZM45.4939 33C45.4939 31.275 45.5095 29.5657 45.4127 27.8438C45.3158 25.8438 44.8595 24.0688 43.397 22.6063C41.9314 21.1407 40.1595 20.6875 38.1595 20.5907C36.4345 20.4938 34.7251 20.5094 33.0033 20.5094C31.2783 20.5094 29.5689 20.4938 27.847 20.5907C25.847 20.6875 24.072 21.1438 22.6095 22.6063C21.1439 24.0719 20.6908 25.8438 20.5939 27.8438C20.497 29.5688 20.5126 31.2782 20.5126 33C20.5126 34.7219 20.497 36.4344 20.5939 38.1563C20.6908 40.1563 21.147 41.9313 22.6095 43.3938C24.0751 44.8594 25.847 45.3125 27.847 45.4094C29.572 45.5063 31.2814 45.4907 33.0033 45.4907C34.7283 45.4907 36.4376 45.5063 38.1595 45.4094C40.1595 45.3125 41.9345 44.8563 43.397 43.3938C44.8627 41.9282 45.3158 40.1563 45.4127 38.1563C45.5127 36.4344 45.4939 34.725 45.4939 33ZM33.0001 39.4094C29.4533 39.4094 26.5908 36.5469 26.5908 33C26.5908 29.4532 29.4533 26.5907 33.0001 26.5907C36.547 26.5907 39.4095 29.4532 39.4095 33C39.4095 36.5469 36.547 39.4094 33.0001 39.4094ZM39.672 27.825C38.8439 27.825 38.1751 27.1563 38.1751 26.3282C38.1751 25.5 38.8439 24.8313 39.672 24.8313C40.5002 24.8313 41.1689 25.5 41.1689 26.3282C41.1691 26.5248 41.1306 26.7196 41.0555 26.9013C40.9803 27.083 40.8701 27.2481 40.731 27.3872C40.592 27.5262 40.4269 27.6365 40.2451 27.7116C40.0634 27.7867 39.8687 27.8253 39.672 27.825Z" fill="white"/>
							</svg>
						</div>
						<div className="scale-50">
							<svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="33" cy="33" r="33" fill="#0489C7"/>
								<path d="M45.0857 26.662C45.1062 26.939 45.1062 27.2145 45.1062 27.49C45.1062 35.9213 38.689 45.6366 26.9612 45.6366C23.3481 45.6366 19.9914 44.5901 17.1667 42.7724C17.6797 42.831 18.1737 42.8516 18.7073 42.8516C21.5779 42.8585 24.3672 41.8986 26.6256 40.1266C25.2947 40.1025 24.0045 39.6634 22.9352 38.8706C21.8659 38.0778 21.0709 36.9709 20.6612 35.7044C21.0554 35.763 21.4512 35.8026 21.8661 35.8026C22.4377 35.8026 23.0124 35.7234 23.546 35.5856C22.1016 35.294 20.8028 34.5111 19.8705 33.3701C18.9381 32.229 18.4298 30.8002 18.4318 29.3267V29.2475C19.2821 29.721 20.2685 30.017 21.3135 30.0566C20.4381 29.4749 19.7202 28.6855 19.224 27.7589C18.7279 26.8323 18.4687 25.7972 18.4698 24.7461C18.4698 23.5618 18.7849 22.4756 19.3375 21.5288C20.9401 23.5001 22.9388 25.1128 25.2043 26.2624C27.4698 27.4121 29.9515 28.0731 32.4887 28.2025C32.3905 27.7275 32.3303 27.2351 32.3303 26.7411C32.3299 25.9035 32.4946 25.074 32.815 24.3C33.1353 23.526 33.6051 22.8228 34.1974 22.2305C34.7897 21.6382 35.4929 21.1684 36.2669 20.8481C37.0408 20.5277 37.8704 20.363 38.708 20.3635C40.5447 20.3635 42.2024 21.133 43.3677 22.3775C44.7956 22.1014 46.1648 21.5801 47.4147 20.8369C46.9388 22.3107 45.9419 23.5604 44.6107 24.3519C45.877 24.2074 47.1146 23.8744 48.2824 23.3639C47.4102 24.6355 46.3294 25.7505 45.0857 26.662Z" fill="white"/>
							</svg>
						</div>
					</div>
				</div>
				<div>
					<div className="shadow-md rounded-3xl p-5 border-primary">
						<form>
							<div className="px-1 md:px-6 py-5">
								<div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-2">
									<div className="col-span-2">
										<input type="text" placeholder="Your Name" name="email-address" id="email-address"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-4 bg-gray-50" />
									</div>
									<div className="col-span-2 md:col-span-1">
										<input type="text" placeholder="Email Address" name="first-name" id="first-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-4 bg-gray-50" />
									</div>
									<div className="col-span-2 md:col-span-1">
										<input type="text" placeholder="Subject" name="last-name" id="last-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-4 bg-gray-50" />
									</div>
									<div className="col-span-1 sm:col-span-2">
										<textarea placeholder="Message" name="last-name" id="last-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-4 bg-gray-50" />
									</div>
								</div>
								<div className="flex justify-center mt-5">
									<button className="bg-primary text-white px-4 py-2 rounded-xl">Send Message</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
