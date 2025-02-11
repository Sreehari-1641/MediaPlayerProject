import React from 'react'
import Homelanding from '../Components/Homelanding'
import { Link } from 'react-router-dom'
import Allcategories from '../Components/Allcategories'
import Allvideos from '../Components/Allvideos'

const Home = () => {
  return (
    <div className="container">
      <div className='d-flex justify-content-between mt-4'>
        <div>
          <Homelanding/>
        </div>
        <div>
          <Link to={"./history"} style={{textDecoration:'none'}}>Watch History</Link>
        </div>
      </div>

      <div className='d-flex justify-content-between mt-5'>
        <div>
          <Allvideos/>
        </div>
        <div>
          <Allcategories/>
        </div>
      </div>

    </div>
  )
}

export default Home