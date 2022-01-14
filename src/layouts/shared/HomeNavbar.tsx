import { ReactElement, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AccountDialogBox from "../../components/General/AccountDialogBox";
import { useRouter } from "next/router";

const HomeNavbar = (): ReactElement => {
	const [toggleNavbar, setToggleNavbar] = useState(false);
	const router = useRouter();

	return (
		<div>
			<nav className="bg-white dark:bg-gray-800">
				<div className="max-w-7xl mx-auto px-8 w-full">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center w-full">
							<Link href={"/"}>
								<a className="flex-shrink-0">
									<Image
										className="h-8 w-8"
										src="/inventors_logo.png"
										width={100}
										height={20}
										alt="workflow"
									/>
								</a>
							</Link>
							<div className="hidden md:flex ml-auto">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link href={"/"}>
										<a
											className={`text-gray-400  hover:text-gray-900 hover:font-semibold dark:hover:text-white px-3 py-2 rounded-md text-sm ${router.pathname === '/' ? 'text-gray-900 font-semibold' : 'font-medium'}`}
										>
										Home
									</a>
									</Link>
									<Link href={"/about-us"}>
										<a
											className={`text-gray-400  hover:text-gray-900 hover:font-semibold dark:hover:text-white px-3 py-2 rounded-md text-sm ${router.pathname === '/about-us' ? 'text-gray-900 font-semibold' : 'font-medium'}`}
										>
											About Us
										</a>
									</Link>
									<Link href={"/inventions"}>
										<a
											className={`text-gray-400  hover:text-gray-900 hover:font-semibold dark:hover:text-white px-3 py-2 rounded-md text-sm ${router.pathname === '/inventions' ? 'text-gray-900 font-semibold' : 'font-medium'}`}
										>
											Inventions
										</a>
									</Link>
									<Link href={"/contact"}>
										<a
											className={`text-gray-400  hover:text-gray-900 hover:font-semibold dark:hover:text-white px-3 py-2 rounded-md text-sm ${router.pathname === '/contact' ? 'text-gray-900 font-semibold' : 'font-medium'}`}
										>
											Contact Us
										</a>
									</Link>
									<AccountDialogBox />
								</div>
							</div>
						</div>
						<div className="block">
							<div className="ml-4 flex items-center md:ml-6"></div>
						</div>
						<div className="-mr-2 flex md:hidden" onClick={() => setToggleNavbar(!toggleNavbar)}>
							<button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
								<svg
									width="20"
									height="20"
									fill="currentColor"
									className="h-8 w-8"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className={`absolute bg-white w-full z-50 md:hidden ${toggleNavbar ? 'block' : 'hidden'}`}>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
						<Link href={"/"}>
							<a
								className="text-gray-400  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>
							Home
						</a>
						</Link>
						<Link href={"/about-us"}>
							<a
								className="text-gray-400 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>
								About Us
							</a>
						</Link>
						<Link href={"/inventions"}>
							<a
								className="text-gray-400  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>
								Inventions
							</a>
						</Link>
						<Link href={"/contact"}>
							<a
								className="text-gray-400  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>
								Contact Us
							</a>
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default HomeNavbar;
