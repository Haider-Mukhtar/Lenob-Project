import { useState } from "react"
import MaxWidthWrapper from "../max-width-wrapper"
import ContactForm from "../ui/contact-form";

const CFormSection = () => {
  return (
    <div>
    <div className="bg-myPrimary h-18 skew-y-2"></div>
    <div className="bg-myDarkBackground font-myFont -mt-10">
      <div className="py-16">
        <MaxWidthWrapper className={"border-white"}>
            <ContactForm />
        </MaxWidthWrapper>
        </div>
      </div>
  </div>
  )
}

export default CFormSection