import MaxWidthWrapper from "./max-width-wrapper"
import LargeBlueStar from '../assets/img/stars/large-blue-star.svg';

const MessageSection = () => {
  return (
    <div className="py-16">
    <MaxWidthWrapper>
        {/*<img className="aspect-square" src={LargeBlueStar} alt="Large-Green-Star" />*/}
        <div className="w-full lg:w-[60%] justify-self-center px-2">
          <div className="space-y-4" >
            <p className="font-myFont text-3xl/14 md:text-5xl/20 text-center font-semibold text-myBlack ">A Message to Ambitious Entrepreneurs</p>
            <div className="font-myFont text-myBlack font-medium text-lg/8 md:text-xl/9 space-y-3 md:space-y-6">
              <p className="font-bold">Dear visionary business owner,</p>
              <p>We hear you. Growing a business is tough—a marathon with no finish line.</p>
              <p>You're juggling budgets, clients, and the constant chase for breakthroughs.</p>
              <p>Late nights, early mornings—pouring your heart and soul into your dream.</p>
              <p>Stuck in a whirlwind: Ads, SEO, rebranding, TikTok, email campaigns—where to begin?</p>
              <p>That nagging thought: "Shouldn't this be easier by now?"</p>
              <p>Here's the truth: You don't have to do it all, or do it alone.</p>
              <div className="font-bold text-myBlack">At Lenob, we simplify growth strategies so you can:
                <ul className="list-disc list-inside">
                  <li>Focus on what matters.</li>
                  <li>Build a fulfilling life.</li>
                  <li>Achieve the freedom you dreamed of.</li>
                </ul>
              </div>
              <div>
              <p>Let's make those big dreams real.</p>
              <p>Your next step starts below.</p>
              <p>Let's build something great—together.</p>
              </div>
            </div>            
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default MessageSection