import SmallBlueStar from '../assets/img/stars/small-blue-star.svg';
import SmallGreenWhiteStar from '../assets/img/stars/small-green-white-star.svg';
import MaxWidthWrapper from './max-width-wrapper';

const InnovateInspireCreateSection = () => {
  return (
    <div className="my-10">
      <MaxWidthWrapper>
        <div className='w-full lg:w-[90%] justify-self-center border border-red-600 px-2 py-10 flex flex-col xl:flex-row gap-12 items-center justify-between'>
        <h1 className="relative text-7xl lg:text-7xl 2xl:text-8xl text-myBlack font-bold">
          <span className="relative z-10">Innovate</span>
          <span
            className="absolute inset-0 z-0 text-transparent"
            style={{
              WebkitTextStroke: "1px #00CFE7",
              textStroke: "1px #00CFE7",
              transform: "translate(0, 22px)",
            }}
          >
            Innovate
          </span>
        </h1>
        <div className='relative'>
          <img className='relative z-10 aspect-square' src={SmallBlueStar} alt='Small-Blue-Star' />
            <div
              className="absolute inset-0 z-0 text-transparent"
              style={{
                WebkitTextStroke: "1px #00CFE7",
                textStroke: "1px #00CFE7",
                transform: "translate(0, 22px)",
              }}>
              <img className='aspect-square' src={SmallGreenWhiteStar} alt='Small-Blue-Star' />
            </div>
        </div>
        <h1 className="relative text-7xl lg:text-7xl 2xl:text-8xl text-myBlack font-bold">
          <span className="relative z-10">Inspire</span>
          <span
            className="absolute inset-0 z-0 text-transparent"
            style={{
              WebkitTextStroke: "1px #00CFE7",
              textStroke: "1px #00CFE7",
              transform: "translate(0, 22px)",
            }}
          >
            Inspire
          </span>
        </h1>
        <div className='relative'>
        <img className='relative z-10 aspect-square' src={SmallBlueStar} alt='Small-Blue-Star' />
          <div
            className="absolute inset-0 z-0 text-transparent"
            style={{
              WebkitTextStroke: "1px #00CFE7",
              textStroke: "1px #00CFE7",
              transform: "translate(0, 22px)",
            }}>
            <img className='aspect-square' src={SmallGreenWhiteStar} alt='Small-blue-Star' />
          </div>
      </div>
        <h1 className="relative text-7xl lg:text-7xl 2xl:text-8xl text-myBlack font-bold">
          <span className="relative z-10">Create</span>
          <span
            className="absolute inset-0 z-0 text-transparent"
            style={{
              WebkitTextStroke: "1px #00CFE7",
              textStroke: "1px #00CFE7",
              transform: "translate(0, 22px)",
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