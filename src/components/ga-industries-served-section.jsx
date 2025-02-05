import MaxWidthWrapper from "./max-width-wrapper"
import ECommerceBanner from "../assets/img/e-commerce-banner.png";
import HealthCareBanner from "../assets/img/healthcare-banner.png";
import EducationBanner from "../assets/img/education-banner.png";
import TechnologyBanner from "../assets/img/technology-banner.png";
import FinancialBanner from "../assets/img/financial-banner.png";
import LegalBanner from "../assets/img/legal-banner.png";
import InsuranceBanner from "../assets/img/insurance-banner.png";

const GAIndustriesServedSection = () => {
  return (
    <div className="pt-16">
      <MaxWidthWrapper>
        <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2">
          <p className="font-myFont text-3xl/14 md:text-5xl/20 font-bold text-myBlack text-center">
            Industries we have Proudly Served
          </p>
          {/*Mobile*/}
          <div className="my-10 block md:hidden space-y-10">
            <div className="grid grid-cols-1 items-center gap-6">
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={ECommerceBanner} alt="ECommerce-Banner" />
              </div>
              <div className="font-myFont text-myBlack space-y-2">
                <p className="text-xl md:text-3xl font-bold">E-commerce</p>
                <p className="text-lg md:text-xl/10">Boost online sales with targeted advertising strategies that drive qualified traffic to your store.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center gap-6">
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={HealthCareBanner} alt="HealthCare-Banner" />
              </div>
              <div className="font-myFont text-myBlack space-y-2">
                <p className="text-xl md:text-3xl font-bold">Healthcare</p>
                <p className="text-lg md:text-xl/10">Attract new patients and promote health services with compliant and effective ad campaigns.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center gap-6">
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={EducationBanner} alt="Education-Banner" />
              </div>
              <div className="font-myFont text-myBlack space-y-2">
                <p className="text-xl md:text-3xl font-bold">Education</p>
                <p className="text-lg md:text-xl/10">Enhance enrollment rates by reaching prospective students with tailored messaging.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center gap-6">
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={TechnologyBanner} alt="Technology-Banner" />
              </div>
              <div className="font-myFont text-myBlack space-y-2">
                <p className="text-xl md:text-3xl font-bold">Technology</p>
                <p className="text-lg md:text-xl/10">Promote your tech solutions to a targeted audience, driving awareness and adoption.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center gap-6">
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={FinancialBanner} alt="Financial-Banner" />
              </div>
              <div className="font-myFont text-myBlack space-y-2">
                <p className="text-xl md:text-3xl font-bold">Financial Institutions</p>
                <p className="text-lg md:text-xl/10">Drive customer acquisition and promote financial products with precision-targeted ads.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center gap-6">
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={LegalBanner} alt="Legal-Banner" />
              </div>
              <div className="font-myFont text-myBlack space-y-2">
                <p className="text-xl md:text-3xl font-bold">Legal</p>
                <p className="text-lg md:text-xl/10">Attract potential clients and increase visibility with strategies tailored to legal practices.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center gap-6">
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={InsuranceBanner} alt="Insurance-Banner" />
              </div>
              <div className="font-myFont text-myBlack space-y-2">
                <p className="text-xl md:text-3xl font-bold">Insurance</p>
                <p className="text-lg md:text-xl/10">Generate high-quality leads and build trust with campaigns tailored to insurance providers.</p>
              </div>
            </div>
          </div>
          {/*Desktop*/}
          <div className="my-10 hidden md:block">
            <div className="grid grid-cols-2 items-center gap-10 lg:gap-20">
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={ECommerceBanner} alt="ECommerce-Banner" />
              </div>
              <div className="font-myFont text-myBlack space-y-4">
                <p className="text-xl md:text-3xl font-bold">E-commerce</p>
                <p className="text-lg md:text-xl/10">Boost online sales with targeted advertising strategies that drive qualified traffic to your store.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-10 lg:gap-20">
              <div className="font-myFont text-myBlack space-y-4">
                <p className="text-xl md:text-3xl font-bold">Healthcare</p>
                <p className="text-lg md:text-xl/10">Attract new patients and promote health services with compliant and effective ad campaigns.</p>
              </div>
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={HealthCareBanner} alt="HealthCare-Banner" />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-10 lg:gap-20">
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={EducationBanner} alt="Education-Banner" />
              </div>
              <div className="font-myFont text-myBlack space-y-4">
                <p className="text-xl md:text-3xl font-bold">Education</p>
                <p className="text-lg md:text-xl/10">Enhance enrollment rates by reaching prospective students with tailored messaging.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-10 lg:gap-20">
              <div className="font-myFont text-myBlack space-y-4">
                <p className="text-xl md:text-3xl font-bold">Technology</p>
                <p className="text-lg md:text-xl/10">Promote your tech solutions to a targeted audience, driving awareness and adoption.</p>
              </div>
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={TechnologyBanner} alt="Technology-Banner" />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-10 lg:gap-20">
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={FinancialBanner} alt="Financial-Banner" />
              </div>
              <div className="font-myFont text-myBlack space-y-4">
                <p className="text-xl md:text-3xl font-bold">Financial Institutions</p>
                <p className="text-lg md:text-xl/10">Drive customer acquisition and promote financial products with precision-targeted ads.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-10 lg:gap-20">
              <div className="font-myFont text-myBlack space-y-4">
                <p className="text-xl md:text-3xl font-bold">Legal</p>
                <p className="text-lg md:text-xl/10">Attract potential clients and increase visibility with strategies tailored to legal practices.</p>
              </div>
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={LegalBanner} alt="Legal-Banner" />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-10 lg:gap-20">
              <div className="border-[12px] border-myGrayText rounded-md justify-self-center w-full">
                <img className="aspect-video w-full object-cover" src={InsuranceBanner} alt="Insurance-Banner" />
              </div>
              <div className="font-myFont text-myBlack space-y-4">
                <p className="text-xl md:text-3xl font-bold">Insurance</p>
                <p className="text-lg md:text-xl/10">Generate high-quality leads and build trust with campaigns tailored to insurance providers.</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default GAIndustriesServedSection