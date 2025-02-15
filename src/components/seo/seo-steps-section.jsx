import React from 'react'
import HighlightedText from '../ui/highlighted-text'
import MaxWidthWrapper from '../max-width-wrapper'
import FacebookPartner from '../../assets/img/fb-partner.png' 
import DotIcon from '../../assets/img/dot-icon.png'
import RightPath from '../../assets/img/right-path.png'
import LeftPath from '../../assets/img/left-path.png'
import { FaArrowRight } from "react-icons/fa6";

const SEOStepsSection = () => {
  return (
    <div className=" bg-myPrimary -skew-y-[2deg]">
      <div className=" bg-myDarkBackground skew-y-[2deg]">
        <MaxWidthWrapper className={"border-amber-300"}>
          <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2 py-10 font-myFont">
            <div className="text-2xl md:text-5xl/16 text-myWhite text-center font-semibold "> 
              The Lenob's Way: Your&nbsp;
              <HighlightedText text={"Roadmap to Success"} />
            </div>
            {/*Desktop*/}
            <div className='text-myBlack font-myFont mt-10 hidden xl:block'>
              <div className='flex  justify-self-start'>
                <div className='bg-mySteps flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                  <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                  <div className='text-lg md:text-3xl/12'>
                    <p className='font-bold'>Discovery and Strategy</p>
                    <p>We start by diving deep into your business, industry, and competition. Our team conducts thorough keyword research and audience analysis to uncover untapped opportunities.</p>
                  </div>
                </div>
                <img className='mt-40 h-60' src={RightPath} />
              </div>
              <div className='flex justify-end'>
                <img className='mt-40 h-60' src={LeftPath} />
                <div className='bg-mySteps flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                  <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                  <div className='text-lg md:text-3xl/12'>
                    <p className='font-bold'>On-Page Optimization</p>
                    <p>From site speed and mobile usability to metadata and internal linking, we fine-tune every aspect of your website to ensure it's optimized for both users and search engines.</p>
                  </div>
                </div>
              </div>
              <div className='flex  justify-self-start'>
              <div className='bg-mySteps flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <p className='font-bold'>Content Creation</p>
                  <p>Content is king, and we create it like royalty. Our team develops high-quality, keyword-rich content that not only ranks but also resonates with your audience. Blogs, landing pages, and product descriptions—we do it all.</p>
                </div>
              </div>
              <img className='mt-40 h-60' src={RightPath} />
              </div>
              <div className='flex justify-end'>
              <img className='mt-40 h-60' src={LeftPath} />
              <div className='bg-mySteps flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <p className='font-bold'>Link Building and Authority Boosting</p>
                  <p>We secure high-quality backlinks from reputable sources, boosting your website's domain authority and trustworthiness in the eyes of Google.</p>
                </div>
              </div>
              </div>
              <div className='flex  justify-self-start'>
              <div className='bg-mySteps flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <p className='font-bold'>Ongoing Analysis and Optimization</p>
                  <p>SEO is not a one-time job. We continuously monitor your campaign's performance and refine our strategies to keep you ahead of the competition.</p>
                </div>
              </div>
              <img className='mt-40 h-60' src={RightPath} />
              </div>
              <div className='flex justify-end'>
                <div className='bg-mySteps flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <span className='font-bold'>Report:</span>
                  &nbsp;Clear, actionable insights so you see exactly how your investment delivers results.
                </div>
              </div>
              </div>
            </div>
            {/*Mobile*/}
            <div className='text-myBlack font-myFont mt-10 block xl:hidden space-y-4'>
              <div className='flex  justify-self-start'>
                <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
                  <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                  <div className='text-lg md:text-3xl/12'>
                    <p className='font-bold'>Discovery and Strategy</p>
                    <p>We start by diving deep into your business, industry, and competition. Our team conducts thorough keyword research and audience analysis to uncover untapped opportunities.</p>
                  </div>
                </div>
              </div>
              <div className='flex justify-end'>
                <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
                  <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                  <div className='text-lg md:text-3xl/12'>
                    <p className='font-bold'>On-Page Optimization</p>
                    <p>From site speed and mobile usability to metadata and internal linking, we fine-tune every aspect of your website to ensure it's optimized for both users and search engines.</p>
                  </div>
                </div>
              </div>
              <div className='flex  justify-self-start'>
              <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <p className='font-bold'>Content Creation</p>
                  <p>Content is king, and we create it like royalty. Our team develops high-quality, keyword-rich content that not only ranks but also resonates with your audience. Blogs, landing pages, and product descriptions—we do it all.</p>
                </div>
              </div>
              </div>
              <div className='flex justify-end'>
              <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <p className='font-bold'>Link Building and Authority Boosting</p>
                  <p>We secure high-quality backlinks from reputable sources, boosting your website's domain authority and trustworthiness in the eyes of Google.</p>
                </div>
              </div>
              </div>
              <div className='flex  justify-self-start'>
              <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <p className='font-bold'>Ongoing Analysis and Optimization</p>
                  <p>SEO is not a one-time job. We continuously monitor your campaign's performance and refine our strategies to keep you ahead of the competition.</p>
                </div>
              </div>
              </div>
              <div className='flex justify-end'>
                <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
                <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                <div className='text-lg md:text-3xl/12'>
                  <span className='font-bold'>Report:</span>
                  &nbsp;Clear, actionable insights so you see exactly how your investment delivers results.
                </div>
              </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 mt-10 rounded-xl cursor-pointer border-2 border-myPrimary hover:bg-transparent group transition-colors duration-300">
                          <p className="text-myWhite group-hover:text-myPrimary font-myFont text-lg md:text-xl font-bold">Claim your Free 30 Min Consultation</p>
                          <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
                        </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}

export default SEOStepsSection