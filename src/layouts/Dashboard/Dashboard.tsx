import type { NextPage } from "next";
import Image from "next/image";
import AddButton from "../../../public/svg/AddButton";
import DashboardSidebar from "../shared/DashboardSidebar";

const Dashboard: NextPage = ({children}) => {
	return (
		<main className="bg-white h-screen overflow-hidden relative">
			<div className="flex items-start justify-between">
				<div className="h-screen hidden lg:block relative w-80">
					<div className="h-full bg-gray-100">
						<div className="flex items-center justify-start pt-6 ml-8">
							<Image src={'/images/inventors_logo.png'} width={120} height={30} alt="logo" />
						</div>
						<DashboardSidebar />
					</div>
				</div>
				<div className="flex flex-col w-full md:space-y-4">
					<header className="w-full z-40 flex items-center justify-between">
						<div className="block lg:hidden ml-6">
							<button className="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
								<svg
									width="20"
									height="20"
									className="text-gray-400"
									fill="currentColor"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
								</svg>
							</button>
						</div>
						<div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
							<div className="relative p-1 flex items-center w-full space-x-4 justify-around flex-row">
								<div className="flex w-1/2">
									<span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
									<path d="M20.6078 17.1753L17.1237 13.6912L14.4439 12.584C15.3362 11.3151 15.8142 9.80126 15.8125 8.25C15.8125 4.08001 12.42 0.6875 8.25 0.6875C4.08001 0.6875 0.6875 4.08001 0.6875 8.25C0.6875 12.42 4.08001 15.8125 8.25 15.8125C9.81476 15.8143 11.3411 15.328 12.6164 14.4213L13.7207 17.094L17.2047 20.5782C17.4281 20.8017 17.6934 20.9789 17.9853 21.0999C18.2773 21.2208 18.5902 21.283 18.9062 21.283C19.2222 21.2831 19.5351 21.2208 19.827 21.0999C20.119 20.979 20.3843 20.8018 20.6077 20.5783C20.8312 20.3549 21.0084 20.0896 21.1293 19.7977C21.2503 19.5057 21.3125 19.1928 21.3125 18.8768C21.3126 18.5608 21.2503 18.2479 21.1294 17.956C21.0085 17.664 20.8313 17.3988 20.6078 17.1753ZM2.0625 8.25C2.0625 4.83828 4.83828 2.0625 8.25 2.0625C11.6617 2.0625 14.4375 4.83828 14.4375 8.25C14.4375 11.6617 11.6617 14.4375 8.25 14.4375C4.83828 14.4375 2.0625 11.6617 2.0625 8.25ZM19.6355 19.606C19.4419 19.7991 19.1797 19.9075 18.9062 19.9075C18.6328 19.9075 18.3706 19.7991 18.177 19.606L14.8868 16.3158L13.8601 13.8307L16.3453 14.8573L19.6356 18.1476C19.8286 18.3411 19.9371 18.6034 19.9371 18.8768C19.937 19.1502 19.8286 19.4124 19.6355 19.606Z" fill="#555555"/>
									</svg>
									</span>
									<input type="text" id="email-with-icon" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="search" placeholder="Search for inventions"/>
								</div>
								<div className="flex items-center justify-end w-1/4">
									<div className="flex flex-col text-center justify-center mx-5">
										<button className="flex justify-center align-baseline items-end">
											<AddButton />
										</button>
										<p className="text-gray-500">Post Invention</p>
									</div>
									<button className="mx-5">
										<Image src={'/svg/notification_badge.svg'} height={20} width={20} alt="notification badge" />
									</button>
									<span className="w-1 h-8 rounded-lg bg-gray-200"></span>
									<a href="#" className="block relative mx-5">
										<Image src={'/images/avatar_placeholder.png'} className="rounded-full" height={40} width={40} alt="Profile image" />
									</a>
								</div>
							</div>
						</div>
					</header>
					<div className="overflow-auto h-screen pb-24 px-4 md:px-6">
						{children}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Dashboard;
