import React from 'react'
import './companies.scss'

import client1 from './images/clients/adbl.png'
import client2 from './images/clients/court.png'
import client3 from './images/clients/buddha.png'
import client4 from './images/clients/mbbl.png'
import client5 from './images/clients/daraz.png'
import client6 from './images/clients/socialdev.png'
import client7 from './images/clients/swiss.png'



const Companies = () => {
  return (
    <div className='companies-main'>
        <h2>Our Clients</h2>
    <div className="slider">
    <div className="slide-track">
    <div className="slide">
        <img src={client1} height={120} width={300}  />
    </div>
    <div className="slide">
        <img src={client2} height={120} width={300}  />
    </div>
    <div className="slide">
        <img src={client3} height={120} width={300}  />
    </div>
    <div className="slide">
        <img src={client4} height={120} width={300}  />
    </div>
    <div className="slide">
        <img src={client5} height={120} width={300}  />
    </div>
    <div className="slide">
        <img src={client6} height={120} width={300}  />
    </div>
    <div className="slide">
        <img src={client7} height={120} width={300}  />
    </div>
    <div className="slide">
        <img src={client1} height={120} width={300}  />
    </div>
    <div className="slide">
        <img src={client2} height={120} width={300}  />
    </div>
    <div className="slide">
        <img src={client3} height={120} width={300}  />
    </div>
    <div className="slide">
        <img src={client4} height={120} width={300}  />
    </div>
    <div className="slide">
        <img src={client5} height={120} width={300}  />
    </div>
    <div className="slide">
        <img src={client6} height={120} width={300}  />
    </div>
    <div className="slide">
        <img src={client7} height={120} width={300}  />
    </div>
    </div>
    </div>

    </div>
  )
}

export default Companies