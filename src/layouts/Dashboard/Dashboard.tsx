import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import AddButton from "../../../public/svg/AddButton";
import DashboardSidebar from "../shared/DashboardSidebar";
import Head from 'next/head'

const Dashboard: NextPage = ({children}) => {
	const [mobileMode, setMobileMode] = useState(false);

	const toggleNavbar = () => {
		setMobileMode(!mobileMode);
	}

	useEffect(() => {
		// @ts-ignore
		navigator?.userAgentData?.mobile ? setMobileMode(true) : setMobileMode(false);
	}, [])

	return (
		<>
			<Head>
				<link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
			</Head>
			<main className="bg-white h-screen overflow-hidden relative">
				<div className="flex items-start justify-between">
					<div className={`${mobileMode ? 'hidden' : 'lg:block'} h-screen relative max-w-xs min-w-19`}>
						<div className="h-full bg-gray-100">
							<div className="flex items-center justify-start pt-6 ml-8">
								<Image src={'/images/inventors_logo.png'} width={120} height={30} alt="logo" />
							</div>
							<DashboardSidebar />
						</div>
					</div>
					{/* Body */}
					<div className="flex flex-col w-full md:space-y-4">
						<header className="w-full z-40 flex items-center justify-between">
							<div className="block lg:hidden ml-6">
								<button onClick={toggleNavbar} className="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
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
							<div className="relative flex flex-col justify-end h-full px-3 md:w-full">
								<div className="relative p-1 flex items-center w-full space-x-4 justify-around flex-row">
									<div className="flex w-3/4 md:w-1/2">
										<span className="search_span">
											<i className="bx bx-search-alt-2 text-xl" />
										</span>
										<input type="text" id="search" className="search_input" name="search" placeholder="Search for inventions"/>
									</div>
									<div className="flex items-center justify-end w-1/4">
										{
											mobileMode ? 
											(
												<div className="flex flex-col text-center justify-center">
													<button className="flex justify-center align-baseline items-end">
														<AddButton />
													</button>
													<p className="text-gray-500">Post Invention</p>
												</div>
											) :
											(
												<>
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
													<div className="block relative mx-5">
														<Image src={'/images/avatar_placeholder.png'} className="rounded-full" height={40} width={40} alt="Profile image" />
													</div>
												</>
											)
										}
									</div>
								</div>
							</div>
						</header>
						<div className="overflow-y-auto h-screen pb-40 px-4 md:px-6">
							<section className="m-2 md:m-16">
								{children}
							</section>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Dashboard;
