import MaxWidthWrapper from "./max-width-wrapper"
import LargeGreenStar from '../assets/img/stars/large-green-star.svg';

const MessageSection = () => {
  return (
    <div className="py-16">
      <MaxWidthWrapper>
        <div className="w-full lg:w-[90%] justify-self-center border border-red-600 px-2">
          <img className="aspect-square" src={LargeGreenStar} alt="Large-Green-Star" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0" >
            <p className="font-myFont text-3xl/14 md:text-5xl/20 font-semibold text-myBlack ">A Message to Ambitious Entrepreneurs</p>
            <div className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/9">
              <p>Dear visionary business owner,</p>
              <p>We hear you. Growing a business is tough—a marathon with no finish line.</p>
              <p>You're juggling budgets, clients, and the constant chase for breakthroughs.</p>
              <p>Late nights, early mornings—pouring your heart and soul into your dream.</p>
              <p>Stuck in a whirlwind: Ads, SEO, rebranding, TikTok, email campaigns—where to begin?</p>
              <p>That nagging thought: "Shouldn't this be easier by now?"</p>
              <p>Here's the truth: You don't have to do it all, or do it alone.</p>
              <div className="font-bold text-myDarkPrimary">At Lenob, we simplify growth strategies so you can:
                <ul className="list-disc list-inside">
                  <li>Focus on what matters.</li>
                  <li>Build a fulfilling life.</li>
                  <li>Achieve the freedom you dreamed of.</li>
                </ul>
              </div>
              <p>Let's make those big dreams real.</p>
              <p>Your next step starts below.</p>
              <p>Let's build something great—together.</p>
            </div>            
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default MessageSection