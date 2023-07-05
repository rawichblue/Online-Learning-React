import './App.css'
import Python from './Pages/Python'
import AdvancedJS from './Pages/AdvancedJS'
import MachineLearning from './Pages/MachineLearning'
import DataScience from './Pages/DataScience'
import School from './Pages/School'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/School' element={<School />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Machine-Learning-with-TensorFlow' element={<MachineLearning />} />
        <Route path='/Intro-to-Python' element={<Python />} />
        <Route path='/Advanced-JavaScript' element={<AdvancedJS />} />
        <Route path='/Data-Science-with-R' element={<DataScience />} />
      </Routes>
    </>
  )
}

function WappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default WappedApp
