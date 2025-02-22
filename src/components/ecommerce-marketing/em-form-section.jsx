import { useState } from "react"
import MaxWidthWrapper from "../max-width-wrapper"
import ContactForm from "../ui/contact-form";
import LeftSideVerticalText from "../ui/left-side-vertical-text";


const EMFormSection = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
          <MaxWidthWrapper className={"border-white"}>
          <LeftSideVerticalText text={"Partner"} className="bg-myLightGray -left-6" />
            <ContactForm />
        </MaxWidthWrapper>
        </div>
      </div>
    <div className="bg-myPrimary -skew-y-[2deg] h-20"></div>
  </div>
  )
}

export default EMFormSection