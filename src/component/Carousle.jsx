import React from 'react'
import "./carousle.css"

import main1 from './images/main1.jpg'
import main2 from './images/main2.jpg'
import main3 from './images/main3.jpg'

const Carousle = () => {
  return (
    <>
    <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel" >
        <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
            <img src={main1} className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block   opacity-75">
                <span className='bg-light-subtle p-2 rounded-3'>Chitwan District Court</span>
             </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
            <img src={main2} className="c" alt="..." />
            <div className="carousel-caption  d-md-block  opacity-75">
                <span className='bg-light-subtle p-2 rounded-3'>Nandani Dairy and Resturant</span>
            </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
            <img src={main3} className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block  opacity-75">
                <span className='bg-light-subtle p-2 rounded-3'>Dipayal High Court</span>
            </div>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    
    </>
  )
}

export default Carousle