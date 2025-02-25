import React, { useState } from 'react'
import Homelanding from '../Components/Homelanding'
import Homelink from '../Components/Homelink'
import Allvideos from '../Components/Allvideos'
import Allcategories from '../Components/Allcategories'

const Home = () => {
  const [videResponce,setVideoResponce]=useState("")
  const [videoDeleteResponce,setVideoDeleteResponce]=useState("")
  return (
    <div className='container mt-4 '>
     <div className='d-flex justify-content-between'>
      <div>
        <Homelanding setVideoResponce={setVideoResponce}/>
      </div>
      <div>
        <Homelink/>
      </div>
     </div>
     <div className='d-flex justify-content-between mt-5'>
      <div>
        <Allvideos videResponce={videResponce} videoDeleteResponce={videoDeleteResponce}/>
      </div>
      <div>
        <Allcategories  setVideoDeleteResponce={setVideoDeleteResponce}/>
      </div>
     </div>
    </div>
  )
}

export default Home