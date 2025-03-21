import RightSidePattrens from '../assets/img/rightside-pattrens.png';
import LeftSidePattrens from '../assets/img/leftside-pattrens.png';
import MaxWidthWrapper from './max-width-wrapper';
import ReactPlayer from 'react-player';

const HeroVideoSection = () => {
  return (
    <div className="-mt-28 skew-0">
      <MaxWidthWrapper>
        <div className="flex flex-col justify-center items-center px-2 ">
          <div className="rounded-2xl bg-gray-500 w-full md:w-[80%] lg:w-[70%] border-[10px]">
            {/*<video
              className="aspect-video h-full w-full rounded-2xl"
              controls
              muted
            >
              <source
                src="https://docs.material-tailwind.com/demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>*/}
            <ReactPlayer
              url="https://www.youtube.com/watch?v=PX3gjTL-uFM"
              className="aspect-video h-full w-full rounded-2xl"
              width="100%"
              height="100%"
              controls
              playing={false} // Change to true if you want autoplay
            />
          </div>
          <div className="bg-myPrimary flex justify-between items-center w-[85%] md:w-[50%] rounded-xl drop-shadow-xl -mt-11 p-4 lg:p-0">
            <img className='hidden lg:block' src={LeftSidePattrens} alt='Left-Side-Pattrens' />
            <div className='flex justify-center items-center gap-10 font-myFont text-myWhite'>
              <div>
                <p className='text-2xl font-bold'>55+</p>
                <p className='text-xs'>Completed Projects</p>
              </div>
              <div>
                <p className='text-2xl font-bold'>20+</p>
                <p className='text-xs'>Happy Customers</p>
              </div>
              <div>
                <p className='text-2xl font-bold'>08+</p>
                <p className='text-xs'>Years of Experience</p>
              </div>
            </div>
            <img className='hidden lg:block' src={RightSidePattrens} alt='Right-Side-Pattrens' />
          </div>
        </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default HeroVideoSection