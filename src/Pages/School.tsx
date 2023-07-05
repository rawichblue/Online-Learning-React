import PythonCourse from "../Components/PythonCourse";
import JSCourse from "../Components/JSCourse";
import MachineCourse from "../Components/MachineCourse";
import DSCourse from "../Components/DSCourse";
import { useState } from 'react'


const School = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-start overflow-x-auto gap-2 mt-5">
          <button onClick={() => handleCategoryClick('All')} className="flex-shrink-0 rounded-full bg-slate-700">All</button>
          <button onClick={() => handleCategoryClick('Programming Fundamentals')} className="flex-shrink-0 rounded-full bg-slate-700">Programming Fundamentals</button>
          <button onClick={() => handleCategoryClick('Web Development')} className="flex-shrink-0 rounded-full bg-slate-700 ">Web Development</button>
          <button onClick={() => handleCategoryClick('Machine Learning')} className="flex-shrink-0 rounded-full bg-slate-700 ">Machine Learning</button>
          <button onClick={() => handleCategoryClick('Data Science')} className="flex-shrink-0 rounded-full bg-slate-700 ">Data Science</button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 w-4/6 gap-y-4 mt-5 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-3">
          {selectedCategory === 'All' && (
            <>
              <PythonCourse />
              <JSCourse />
              <MachineCourse />
              <DSCourse />
            </>
          )}
          {selectedCategory === 'Programming Fundamentals' && <PythonCourse />}
          {selectedCategory === 'Web Development' && <JSCourse />}
          {selectedCategory === 'Machine Learning' && <MachineCourse />}
          {selectedCategory === 'Data Science' && <DSCourse />}
        </div>
      </div>
    </>
  );
};

export default School;
