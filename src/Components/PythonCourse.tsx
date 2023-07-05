import { useEffect, useState } from "react";
import axios from 'axios';
import PythonIMG from '../img/PythonIMG.jpg'


type Course = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
}


const PythonCourse = () => {
  const [courses, setCourses] = useState<Course[]>([]);


  useEffect(() => {
    axios
      .get('https://borntodev-final-project-api.borntodev.repl.co/courses/1')
      .then(response => {
        console.log(response.data);
        setCourses([response.data]);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);



  return (

    <div>
      {courses.map((product: Course) => (
        <div className="w-60 p-2 h-96 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl bg-gray-800" key={product.id}>
          
          <img className='h-40 object-cover rounded-xl bg-center bg-slate-600' src={PythonIMG} alt={product.name} />
          
          <div className='p-2 h-16 flex justify-center items-center font-bold'>
            <h2 className='font-bole text-lg'>{product.name}</h2>
          </div>

          <div className="h-16">
            <p className='text-sm text-gray-400'>{product.description}</p>
          </div>

          <div className='m-2 absolute inset-x-0 bottom-2 h-8'>
            <a href="Intro-to-Python" className='text-white bg-purple-600 px-3 py-1 rounded-md hover:text-black'>Open Access</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PythonCourse



