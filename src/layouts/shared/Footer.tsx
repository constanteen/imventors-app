import type { NextPage } from 'next';
import Image from 'next/image';

const Footer: NextPage = () => {
	return (
		<footer className="bg-primary pt-4 pb-8 xl:pt-8">
			<div className="grid grid-cols-1 md:grid-cols-2 md:px-8 lg:px-48 px-4 pt-10 sm:pt-12 ">
				<div className="flex justify-evenly flex-col px-3 md:px-20 order-2 md:order-1 mt-10 md:mt-0">
          <div className="flex sm:w-1/2 w-full">
            <Image
              src={'/inventors-logo-white.png'}
              width={300}
              height={60}
              alt="inventors white logo"
            />
          </div>
					<p className="text-sm my-6 text-white">
						Investors platform is a modern community that comprises of
						inventors and investors where creativity and innovation meets
						actualization, thereby benefiting both party, its society and the
						world at large.
					</p>
					<p className="text-sm text-white">
						&copy; Investors {new Date().getFullYear()}. All Rights Reserved.
					</p>
				</div>
				<div className="flex flex-col justify-evenly order-1 md:order-2 px-3">
					<div className="w-full md:w-5/6">
						<form>
							<div className="relative">
								<input
									type="text"
									id='"form-subscribe-Subscribe'
									className="pr-32 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-3.5 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
									placeholder="Email"
								/>
                <button
                  className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 absolute right-1.5 top-1.5"
                  type="submit"
                >
                  <i className='bx bx-paper-plane' /> &nbsp;Subscribe
                </button>
							</div>
						</form>
					</div>
          <div>
            <ul className="text-lg font-light mt-16 flex justify-center">
              <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-sm text-left text-white">
                  <ul>
                    <li className="mb-4 dark:hover:text-white transition-colors duration-200">
                      <p className="font-semibold">Company</p>
                    </li>
                    <li className="mb-4 hover:text-blue-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">About</a>
                    </li>
                    <li className="mb-4 hover:text-blue-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Features</a>
                    </li>
                    <li className="mb-4 hover:text-blue-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-sm text-left text-white">
                  <ul>
                    <li className="mb-4 dark:hover:text-white transition-colors duration-200">
                      <p className="font-semibold">Region</p>
                    </li>
                    <li className="mb-4 hover:text-blue-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Indonesia</a>
                    </li>
                    <li className="mb-4 hover:text-blue-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Singapore</a>
                    </li>
                    <li className="mb-4 hover:text-blue-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Hong Kong</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-sm text-left text-white">
                  <ul>
                    <li className="mb-4 dark:hover:text-white transition-colors duration-200">
                      <p className="font-semibold">Help</p>
                    </li>
                    <li className="mb-4 hover:text-blue-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Help Center</a>
                    </li>
                    <li className="mb-4 hover:text-blue-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Contact Support</a>
                    </li>
                    <li className="mb-4 hover:text-blue-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">Instructions</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
