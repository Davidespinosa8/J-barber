import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export function Header(){
  return(
    <nav className="border-gray-200 bg-gray-90 bg-opacity-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/assestment/shawer.png" width="25" height="10"  alt="Shawer" />
          <span className="self-center text-3xl font-normal whitespace-nowrap dark:text-white font-Kaushan">J·Barber</span>
        </a>
        <div className="flex items-right lg:order-2">
          <div className="flex item-center justify-between">
          <Link href="https://www.instagram.com/j.barber_ok/" className="text-4xl flex items-center gap-4 cursor-pointer m-3 transition duration-300 ease-in-out hover:text-purple-700 ">
            <FiInstagram/>
          </Link>
          <Link href="https://wa.me/+542364453214/" className="text-4xl flex items-center gap-4 cursor-pointer m-3  transition duration-300 ease-in-out bg-gradient-to-r  hover:text-green-500">
            <FaWhatsapp/>
          </Link>
          </div>
        </div>
      </div>
    </nav>
    
    )
    
}