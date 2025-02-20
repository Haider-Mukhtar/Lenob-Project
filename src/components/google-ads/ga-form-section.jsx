import { useState } from "react"
import MaxWidthWrapper from "../max-width-wrapper"
import ContactForm from "../ui/contact-form";


const GAFormSection = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
        <MaxWidthWrapper className={"border-white"}>
            <ContactForm />
        </MaxWidthWrapper>
        </div>
      </div>
    <div className="bg-myPrimary -skew-y-[2deg] h-20"></div>
  </div>
  )
}

export default GAFormSection