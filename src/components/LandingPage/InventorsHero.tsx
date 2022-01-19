import { ReactElement } from "react";
import Image from 'next/image';

export default function InventorsHero():ReactElement {
  return (
    <section className="bg-gray-100 rounded-3xl m-4 lg:m-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<div className="flex justify-center items-center flex-col mx-2 lg:mx-5 xl:mx-10">
            <div className="p-5">
              <div className="text-2xl lg:text-5xl font-extrabold">
                <p>Invest in any of the invention of your choice.</p>
              </div>
              <div className="text-base lg:text-xl text-gray-400 my-6 px-0 lg:pr-32 lg:my-10">
                <p>Invest on the best talent around the world
                on our secure and flexible platform.</p>
              </div>
              <form className="mr-0 lg:mr-10">
                <div className="relative">
                  <input
                    type="text"
                    id='"form-subscribe-Subscribe'
                    className="pr-32 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-3.5 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Search for Inventions"
                  />
                  <button
                    className="flex-shrink-0 px-4 lg:px-8 py-2 text-base font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 absolute right-1.5 top-1.5"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
					</div>
					<div className="hidden md:block">
						<Image
							src="/images/landing_hero.svg"
							alt="illustration people collaborating"
							height={500}
							width={500}
						/>
					</div>
				</div>
			</section>
  )
}