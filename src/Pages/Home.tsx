import OnlineLearning from '../img/OnlineLearning.jpg'
import sdlc from '../img/sdlc.png'
import dashboard from '../img/dashboard.png'

const Home = () => {
  return (
    <>
      <div>
        <div>
          <img src={OnlineLearning} className='w-full' />
          <p className='sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-3xl p-3 mt-5 font-bold'>Unlock the world of coding and unleash your creativity. Join us on an exhilarating journey into the realm of programming and discover endless possibilities</p>
          <a href="/school"><button className="text-white bg-purple-600 hover:text-black mt-5">Get Started</button></a>
        </div>

        <div className='grid grid-cols-2 mt-10 max-sm:grid-cols-1'>
          <div className='h-80 flex justify-center items-center max-sm:h-40'>
            <img src={sdlc} className='w-1/3' />
          </div>

          <div className='h-80 flex justify-center items-center max-sm:h-40'>
            <p className='sm:text-sm md:text-md lg:text-lg xl:text-xl p-5'>
              Welcome to the captivating world of programming, where creativity intertwines with logic, innovation meets problem-solving, and endless possibilities await those who dare to code, create, and shape the future with their fingertips
            </p>
          </div>
        </div>

        <div className='grid grid-cols-2 mt-10 max-sm:flex flex-col-reverse'>
          <div className='h-80 flex justify-center items-center max-sm:h-40'>
            <p className='sm:text-sm md:text-md lg:text-lg xl:text-xl p-5'>
              Explore diverse tech courses: Data Science (R), Machine Learning (TensorFlow), Advanced JavaScript, and Python. Unlock potential, master analysis, ML, web dev, and Python. Elevate skills, shape the future, embrace endless opportunities in technology.
            </p>
          </div>

          <div className='h-80 flex justify-center items-center max-sm:h-40'>
            <img src={dashboard} className='w-1/3' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home