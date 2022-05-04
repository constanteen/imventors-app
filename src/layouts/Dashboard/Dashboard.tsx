import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import AddButton from "../../../public/svg/AddButton";
import DashboardSidebar from "../shared/DashboardSidebar";
import {useRouter} from 'next/router';
import detectMob from "../../utils/checkMobile";

const Dashboard: NextPage = ({children}) => {
	const [showNavbar, setShowNavbar] = useState(false);
	const [mobileMode, setMobileMode] = useState(false);
  const router = useRouter();

	const toggleNavbar = () => {
		setShowNavbar(!showNavbar);
	}

	const handleTopActionButton = () => {
		router.pathname.includes('investor') ? 
		router.push('/dashboard/investor/interested-inventions') 
		: router.push('/dashboard/inventor/post-invention');
	}

	const topActionButtonText = router.pathname.includes('investor') ? 'Invest Now' : 'Post Invention';

	useEffect(() => {
		const handleRouteChange = () => {
			mobileMode ? setShowNavbar(false) : () => {};
		}

		router.events.on('routeChangeComplete', handleRouteChange);

		// @ts-ignore
		detectMob() ? setMobileMode(true) : setMobileMode(false);

		mobileMode ? setShowNavbar(false) : setShowNavbar(true);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		}
	}, [router.events, mobileMode])

	return (
		<>
			<main className="bg-white h-screen overflow-hidden relative">
				<div className="flex items-start justify-between">
					<div className={`${showNavbar ? 'lg:block' : 'hidden'} h-screen z-50 max-w-xs min-w-19 md:relative absolute`}>
						<div className="h-full bg-gray-100">
							<div className="flex items-center justify-start pt-6 ml-8">
								<Image src={'/inventors_logo.png'} width={130} height={30} alt="logo" />
								<div className="block lg:hidden ml-auto mr-2">
									{
										mobileMode && showNavbar ? <button onClick={toggleNavbar} className="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
											<i className='bx bx-chevron-left' style={{color: "#afafa5", fontSize: "1.8rem"}} />
										</button> : <></>
									}
								</div>
							</div>
							<DashboardSidebar />
						</div>
					</div>
					{/* Body */}
					<div className="flex flex-col w-full md:space-y-4">
						<header className="w-full z-40 flex items-center justify-between">
							<div className="block lg:hidden ml-6">
								<button onClick={toggleNavbar} className="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
									{
										showNavbar ? 
											<i className='bx bx-chevron-left' style={{fontSize: "1.8rem"}} /> 
											: 
											<i className='bx bx-menu' style={{color: "#afafa5", fontSize: "1.8rem"}} />
									}
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
												<div className="flex flex-col text-center justify-center cursor-pointer" onClick={handleTopActionButton}>
													<button className="flex justify-center align-baseline items-end">
														<AddButton />
													</button>
													<p className="text-gray-500">{topActionButtonText}</p>
												</div>
											) :
											(
												<>
													<div className="flex flex-col text-center justify-center mx-4 cursor-pointer" onClick={handleTopActionButton}>
														<button className="flex justify-center align-baseline items-end">
															<AddButton />
														</button>
														<p className="text-gray-500">{topActionButtonText}</p>
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
						<div className="overflow-y-auto h-screen pb-40 px-4 md:px-5">
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
