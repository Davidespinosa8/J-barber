import React from 'react';
import Image from 'next/image';
import JoinUsSection from '@/components/Footer/JoinUsSection';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <>
      <JoinUsSection />
      <hr className="text-white mx-5" />
      <footer className="bg-black pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <Image src="/assestment/shawer.png" width="40" height="20"  alt="Shawer" /><span className="self-center text-3xl font-normal whitespace-nowrap dark:text-white font-Kaushan"> J·Barber</span>
            </div>
            
            <p className="mt-4 text-l text-center text-gray-400 lg:text-right lg:mt-0">
              Creado por &nbsp; <Link href={'https://myprofile-delta-roan.vercel.app/'}><span className='font-Changa text-2xl'>D-8</span></Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
