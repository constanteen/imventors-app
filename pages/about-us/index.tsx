import type { NextPage } from 'next';
import Image from 'next/image';

const About: NextPage = () => {
	return (
    <div>
      <div className="container bg-primary my-5">
        <div className="flex justify-center items-center flex-col py-20 text-white">
          <h1 className="font-extrabold text-4xl mb-3">About Us</h1>
          <p>Get to know what we do, how we do and why we do it.</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <Image src="/images/about-1.png" width={300} height={800} objectFit="contain" alt="people putting their hands together" />
        <div>
          <p className="text-4xl">Get to know us.</p>
          <p>
            Investors Platform is a modern community that comprises of 
            inventors and investors where creativity meets actualization, 
            thereby benefitting both parties the society and the world at large.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p>Why Choose Us?</p>
          <p>
            At investors platform, we are not restricted to professional ideas but 
            creative ideas and talents which cut across commerce, technology, music, 
            fashion, agriculture, crafts, transportation, and other economic sector.
          </p>
        </div>
        <Image src="/images/about-2.png" width={300} height={800} objectFit="contain" alt="ladies looking down" />
      </div>
    </div>
	);
};

export default About;
