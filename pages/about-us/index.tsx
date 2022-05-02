import type { NextPage } from 'next';
import Image from 'next/image';

const About: NextPage = () => {
	return (
    <>
      <div className="bg-primary my-5 w-screen">
        <div className="flex justify-center items-center flex-col py-20 text-white">
          <h1 className="font-extrabold text-4xl mb-3">About Us</h1>
          <p>Get to know what we do, how we do and why we do it.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Image src="/images/about-1.png" width={500} height={600} objectFit="contain" alt="people putting their hands together" />
        <div className="flex flex-col justify-center px-10 md:px-0">
          <div className="text-4xl font-extrabold mb-5">
            <p>Get to</p>
            <p>know us.</p>
          </div>
          <p className="text-gray-400 leading-8 text-xl w-full lg:w-3/4 xl:w-1/2">
            Investors Platform is a modern community that comprises of 
            inventors and investors where creativity meets actualization, 
            thereby benefitting both parties the society and the world at large.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 md:mt-0">
        <div className="flex justify-center items-center px-10 md:px-0 mb-20">
          <div className="flex flex-col w-full lg:w-3/4 xl:w-1/2 ml-0 md:ml-10 lg:ml-0">
            <div className="text-4xl font-extrabold mb-5">
              <p>Why Choose</p>
              <p>us? </p>
            </div>
            <p className="text-gray-400 leading-8 text-xl">
              At investors platform, we are not restricted to professional ideas but 
              creative ideas and talents which cut across commerce, technology, music, 
              fashion, agriculture, crafts, transportation, and other economic sector.
            </p>
          </div> 
        </div>
        <Image src="/images/about-2.png" width={500} height={600} objectFit="contain" alt="ladies looking down" />
      </div>
    </>
	);
};

export default About;
