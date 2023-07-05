import notfoundIMG from '../img/notfoundIMG.png'

const NotFound = () => {
  return (

    <div className="flex justify-center items-center mt-5">

      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-54 w-full object-cover md:h-full md:w-96" src={notfoundIMG} />
        </div>

        <div className="p-8 flex flex-col justify-center items-center">
          <p className="block mt-1 text-2xl font-bold leading-tight text-white hover:underline">The page you were looking for doesn't exist</p>
          <p className="mt-2 text-slate-300">You may have mistyped the address or the page may have moved.</p>
          
          <div className='mt-10 flex justify-center gap-5'>
            <a href="/"><button className='w-40 text-white bg-slate-600 rounded-md hover:text-black hover:bg-slate-700'>Home</button></a>
            <a href="/School"><button className='w-40 text-white bg-purple-600 rounded-md hover:text-black hover:bg-purple-700'>School</button></a>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default NotFound