import MaxWidthWrapper from "./max-width-wrapper"
import LenobLogoFooter from "../assets/img/lenob-footer-logo.png";
import { FaFacebook,FaLinkedinIn,FaGithub,FaDribbble   } from "react-icons/fa";

const Footer = () => {

  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="bg-myPrimary">
      <MaxWidthWrapper>
        <div className="lg:p-8 p-4 grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-0">
          <div className="lg:col-span-1 xl:col-span-2 space-y-6">
            <img className="h-20" src={LenobLogoFooter} alt="Lenob-Logo-Footer" />
            <p className="font-myFont text-myWhite text-base">We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.</p>
          </div>
          <div className="flex flex-col lg:items-center">
            <div className="flex flex-col gap-6 font-myFont text-myWhite">
              <p className="font-bold text-lg">Company</p>
              <a href="#" className="text-sm hover:underline">About Us</a>
              <a href="#" className="text-sm hover:underline">Our Services</a>
            </div>
          </div>
          <div className="flex flex-col lg:items-center">
            <div className="flex flex-col gap-6 font-myFont text-myWhite">
              <p className="font-bold text-lg">Resources</p>
              <a href="#" className="text-sm hover:underline">Book a free Consultation</a>
              <a href="#" className="text-sm hover:underline">Request a Free Audit</a>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <p className="font-bold text-lg text-myWhite">Newsletter</p>
            <input
              type="email"
              className="bg-myWhite text-myBlack outline-none px-2 py-4 text-base font-myFont rounded-lg"
              placeholder="Enter your email address" />
            <div className="bg-myBlack justify-self-center py-3 px-6 rounded-lg cursor-pointer border-2 border-myBlack hover:bg-transparent group transition-all duration-300 w-fit">
              <p className="text-myWhite group-hover:text-myBlack font-myFont text-base font-bold">
                Book a Discovery Call
              </p>
            </div>
          </div>
        </div>
        <div className="py-8 lg:px-20 px-4 lg:flex justify-between items-center space-y-6 lg:space-y-0">
          <p className="text-myWhite font-myFont text-base text-center lg:text-start">Copyright © {year} Catalyst Studio. All rights reserved.</p>
          <div className="flex gap-6 justify-center lg:justify-start">
            <div className="bg-myWhite p-2 flex justify-center items-center rounded-full cursor-pointer hover:scale-110 transition-transform duration-300">
              <FaFacebook className="size-6" />
            </div>
            <div className="bg-myWhite p-2 flex justify-center items-center rounded-full cursor-pointer hover:scale-110 transition-transform duration-300">
              <FaLinkedinIn className="size-6" />
            </div>
            <div className="bg-myWhite p-2 flex justify-center items-center rounded-full cursor-pointer hover:scale-110 transition-transform duration-300">
              <FaGithub className="size-6" />
            </div>
            <div className="bg-myWhite p-2 flex justify-center items-center rounded-full cursor-pointer hover:scale-110 transition-transform duration-300">
              <FaDribbble className="size-6" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Footer