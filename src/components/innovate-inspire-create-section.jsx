import SmallGreenStar from '../assets/img/stars/small-green-star.svg';
import SmallGreenWhiteStar from '../assets/img/stars/small-green-white-star.svg';
import MaxWidthWrapper from './max-width-wrapper';

const InnovateInspireCreateSection = () => {
  return (
    <div className="my-10">
      <MaxWidthWrapper>
        <div className='w-full lg:w-[90%] justify-self-center border border-red-600 px-2 py-10 flex flex-col xl:flex-row gap-12 items-center justify-between'>
        <h1 className="relative text-7xl lg:text-7xl text-myBlack font-extrabold">
          <span className="relative z-10">Innovate</span>
          <span
            className="absolute inset-0 z-0 text-transparent"
            style={{
              WebkitTextStroke: "1px #9EFF00",
              textStroke: "1px #9EFF00",
              transform: "translate(0, 26px)",
            }}
          >
            Innovate
          </span>
        </h1>
        <div className='relative'>
          <img className='relative z-10 aspect-square' src={SmallGreenStar} alt='Small-Green-Star' />
            <div
              className="absolute inset-0 z-0 text-transparent"
              style={{
                WebkitTextStroke: "1px #9EFF00",
                textStroke: "1px #9EFF00",
                transform: "translate(0, 24px)",
              }}>
              <img className='aspect-square' src={SmallGreenWhiteStar} alt='Small-Green-Star' />
            </div>
        </div>
        <h1 className="relative text-7xl lg:text-7xl text-myBlack font-extrabold">
          <span className="relative z-10">Inspire</span>
          <span
            className="absolute inset-0 z-0 text-transparent"
            style={{
              WebkitTextStroke: "1px #9EFF00",
              textStroke: "1px #9EFF00",
              transform: "translate(0, 26px)",
            }}
          >
            Inspire
          </span>
        </h1>
        <div className='relative'>
        <img className='relative z-10 aspect-square' src={SmallGreenStar} alt='Small-Green-Star' />
          <div
            className="absolute inset-0 z-0 text-transparent"
            style={{
              WebkitTextStroke: "1px #9EFF00",
              textStroke: "1px #9EFF00",
              transform: "translate(0, 24px)",
            }}>
            <img className='aspect-square' src={SmallGreenWhiteStar} alt='Small-Green-Star' />
          </div>
      </div>
        <h1 className="relative text-7xl lg:text-7xl text-myBlack font-extrabold">
          <span className="relative z-10">Create</span>
          <span
            className="absolute inset-0 z-0 text-transparent"
            style={{
              WebkitTextStroke: "1px #9EFF00",
              textStroke: "1px #9EFF00",
              transform: "translate(0, 26px)",
            }}
          >
            Create
          </span>
        </h1>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default InnovateInspireCreateSection