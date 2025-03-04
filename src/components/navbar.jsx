import { FaAngleDown } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";
import MaxWidthWrapper from "./max-width-wrapper";
import LenobNavbarLogo from "../assets/img/lenob-navbar-logo.png";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/use-on-click-outside";
import { Link } from "react-router";
import { RiMenu3Fill } from "react-icons/ri";


const Navbar = () => {
  const menuRef = useRef(null);
  const [toggleMenu, setToggleMenu] = useState(false)
  useOnClickOutside(menuRef, () => setToggleMenu(false));

  const subMenuRef = useRef(null);
  const [toggleSubMenu, setToggleSubMenu] = useState(false)
  useOnClickOutside(subMenuRef, () => setToggleSubMenu(false));

  const [toggleSubMenuMobile, settoggleSubMenuMobile] = useState(false)

  return (
    <nav className="fixed z-[50] top-0 left-0 w-full bg-white drop-shadow-xl">
      <MaxWidthWrapper>
        {/*Desktop*/}
        <div className="hidden lg:flex items-center justify-between px-8 h-[72px]">
          <div className="flex items-center gap-14">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}><img className="h-10 object-cover" src={LenobNavbarLogo} alt="Lenob-Navbar-Logo" /></Link>
            <div className="space-x-8 flex items-center text-sm font-myFont font-bold">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
              <button onClick={()=>setToggleSubMenu(!toggleSubMenu)} className="flex items-center gap-2 cursor-pointer group relative">
                <p>Our Services</p> 
                <FaAngleDown />
                {
                  toggleSubMenu ?
                  <div className="flex flex-col absolute top-[50px] bg-myWhite px-4 py-8 w-50 rounded-2xl gap-4 items-center transition-transform duration-1000 drop-shadow-xl">
                    <Link to="/google-ads">Google Ads</Link>
                    <Link to="/facebook-ads">Facebook Ads</Link>
                    <Link to="/seo">SEO</Link>
                    <Link to="/ecommerce-marketing">Ecommerce Marketing</Link>
                    <Link to="/b2b-lead-generation">B2B Lead Generation</Link>
                    </div>
                    : null 
                }
              </button>
              <Link to="/about-us">About Us</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="bg-myPrimary h-12 flex justify-center items-center rounded-full cursor-pointer px-6 border-2 border-myPrimary hover:bg-transparent transition-all duration-300 text-myWhite hover:text-myPrimary">
            <p className="font-myFont font-bold">Contact Us</p>
          </div>
        </div>
        {/*Mobile*/}
        <div className="flex lg:hidden items-center justify-between px-3 h-[72px]">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img className="h-10 object-cover" src={LenobNavbarLogo} alt="Lenob-Navbar-Logo" />
            </Link>
          <button onClick={()=>setToggleMenu(true)} className="h-10 w-10 flex justify-center items-center rounded-lg bg-myPrimary">
            <RiMenu3Fill className="size-8 fill-myWhite"/>
          </button>
          </div>
          {
            toggleMenu ?
            <div ref={menuRef} className="p-2 space-y-4 absolute w-56 sm:w-60 md:w-72 top-2 right-1 rounded-lg flex lg:hidden flex-col drop-shadow-lg bg-myPrimary">
              <div className="flex justify-end">
                <button onClick={()=>setToggleMenu(false)} className="h-10 w-10 flex justify-center items-center rounded-lg bg-myDarkBackground">
                  <RiMenu3Fill  className="size-8 fill-white"/>
                </button>
              </div>
              <div className="text-base font-myFont font-bold space-y-4 flex flex-col items-center pb-2">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                <button onClick={()=>settoggleSubMenuMobile(!toggleSubMenuMobile)} className="flex flex-col items-center gap-2 cursor-pointer group relative">
                  <div className="flex items-center gap-2">
                  <p>Our Services</p> 
                  <FaAngleDown />
                  </div>
                {
                  toggleSubMenuMobile ?
                  <div  className="flex flex-col bg-myWhite px-4 py-8 w-50 rounded-2xl gap-4 items-center transition-transform duration-1000">
                    <Link to="/google-ads">Google Ads</Link>
                    <Link to="/facebook-ads">Facebook Ads</Link>
                    <Link to="/seo">SEO</Link>
                    <Link to="/ecommerce-marketing">Ecommerce Marketing</Link>
                    <Link to="/b2b-lead-generation">B2B Lead Generation</Link>
                    </div>
                    : null 
                }
              </button>
              <Link to="/about-us">About Us</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/contact">Contact</Link>
                <div className="bg-myWhite h-12 flex justify-center items-center rounded-full px-6 hover:border-2 border-myBlack text-myPrimary hover:text-myBlack">
                  <p className="font-myFont font-bold">Contact Us</p>
                </div>
              </div>
              </div>
              : null
          }
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar;