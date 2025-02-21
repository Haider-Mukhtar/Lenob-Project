import { useState } from "react"
import MaxWidthWrapper from "../max-width-wrapper"
import ContactForm from "../ui/contact-form";
import LeftSideVerticalText from "../ui/left-side-vertical-text";

const CFormSection = () => {
  return (
    <div>
    <div className="bg-myPrimary h-18 skew-y-2"></div>
    <div className="bg-myDarkBackground font-myFont -mt-10">
      <div className="py-16">
          <MaxWidthWrapper className={"border-white"}>
          <LeftSideVerticalText text={"Partner"} className="bg-myLightGray -left-6" />
            <ContactForm />
        </MaxWidthWrapper>
        </div>
      </div>
  </div>
  )
}

export default CFormSection