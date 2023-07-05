import axios from 'axios';
import { useEffect, useState } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckIcon from '@mui/icons-material/Check';
import section1 from '../video/section1.mp4'
import section2 from '../video/section2.mp4'
import section3 from '../video/section3.mp4'
import section4 from '../video/section4.mp4'
import ReactModal from 'react-modal';
import ReactPlayer from 'react-player';

type Course = {
  id: number;
  name: string;
  category: string;
  description: string;
}

type VideoStatus = {
  videoUrl: string;
  isCompleted: boolean;
};

const MachineLearning = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [videoStatus, setVideoStatus] = useState<VideoStatus[]>([
    { videoUrl: section1, isCompleted: false },
    { videoUrl: section2, isCompleted: false },
    { videoUrl: section3, isCompleted: false },
    { videoUrl: section4, isCompleted: false },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handlePlay = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
    setIsVideoEnded(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo("");
  }


  useEffect(() => {
    axios
      .get('https://borntodev-final-project-api.borntodev.repl.co/courses/3')
      .then(response => {
        setCourses([response.data]);
      })
      .catch(error => {
        console.log('There was an error!', error);
      });
  }, []);

  useEffect(() => {
    if (isVideoEnded) {
      const updatedStatus = videoStatus.map(status =>
        status.videoUrl === selectedVideo ? { ...status, isCompleted: true } : status
      );
      setVideoStatus(updatedStatus);
      localStorage.setItem("videoCompleted", "true");
    }
  }, [isVideoEnded, selectedVideo, videoStatus]);


  return (
    <div>
      {courses.map((product: Course) => (
        <div key={product.id}>
          <div className='p-2 h-16 flex justify-center items-center'>
            <h1 className='font-bole text-4xl font-bold mt-10'>
              {product.name}
            </h1>
          </div>

          <div className="h-16 mt-10">
            <p className='text-sm p-2'>{product.description}</p>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col gap-2">

              <button className="rounded-full bg-slate-600 w-full">
                <div className="flex gap-5">
                  <p className="flex justify-center items-center ms-3">1</p>
                  {videoStatus[0].isCompleted ? (
                    <CheckIcon style={{ fontSize: '3rem' }} className="text-green-500" onClick={() => handlePlay(section1)} />
                  ) : (
                    <PlayCircleIcon style={{ fontSize: '3rem' }} className="text-red-500" onClick={() => handlePlay(section1)} />
                  )}
                  <p className="flex justify-center items-center max-sm:text-left">Introduction to Machine Learning.</p>
                </div>
              </button>

              <button className="rounded-full bg-slate-600 w-full">
                <div className="flex gap-5">
                  <p className="flex justify-center items-center ms-3">2</p>
                  {videoStatus[1].isCompleted ? (
                    <CheckIcon style={{ fontSize: '3rem' }} className="text-green-500" onClick={() => handlePlay(section2)} />
                  ) : (
                    <PlayCircleIcon style={{ fontSize: '3rem' }} className="text-red-500" onClick={() => handlePlay(section2)} />
                  )}
                  <p className="flex justify-center items-center max-sm:text-left">Neural Networks and Deep Learning.</p>
                </div>
              </button>

              <button className="rounded-full bg-slate-600 w-full">
                <div className="flex gap-5">
                  <p className="flex justify-center items-center ms-3">3</p>
                  {videoStatus[2].isCompleted ? (
                    <CheckIcon style={{ fontSize: '3rem' }} className="text-green-500" onClick={() => handlePlay(section3)} />
                  ) : (
                    <PlayCircleIcon style={{ fontSize: '3rem' }} className="text-red-500" onClick={() => handlePlay(section3)} />
                  )}
                  <p className="flex justify-center items-center max-sm:text-left">Model Evaluation and Validation.</p>
                </div>
              </button>

              <button className="rounded-full bg-slate-600 w-full">
                <div className="flex gap-5">
                  <p className="flex justify-center items-center ms-3">4</p>
                  {videoStatus[3].isCompleted ? (
                    <CheckIcon style={{ fontSize: '3rem' }} className="text-green-500" onClick={() => handlePlay(section4)} />
                  ) : (
                    <PlayCircleIcon style={{ fontSize: '3rem' }} className="text-red-500" onClick={() => handlePlay(section4)} />
                  )}
                  <p className="flex justify-center items-center max-sm:text-left">Deployment and Productionizing of Machine Learning Models.</p>
                </div>
              </button>
            </div>

          </div>

          <ReactModal
            isOpen={isModalOpen}
            contentLabel="Video Modal"
            className="flex justify-center items-center absolute bottom-0 top-0 left-0 right-0"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            onRequestClose={closeModal}>


            <ReactPlayer url={selectedVideo} controls={true} onEnded={() => setIsVideoEnded(true)} />
          </ReactModal>
        </div>
      ))}
    </div>
  )
}

export default MachineLearning