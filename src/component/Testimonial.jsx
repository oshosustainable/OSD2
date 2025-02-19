import React from 'react';
import './testimonial.css'; 
import logoImage from './images/logo.jpg'; 

const Testimonial = () => {

  const data = [
    {
      name: 'Satish Mahat',
      image: logoImage,
      desc: '"Highly recommend OSD2 for their exceptional service, professionalism, and attention to detail. Exceeded expectations!"'
    },
    {
      name: 'Suresh Poudel',
      image: logoImage,
      desc: '"OSD2 delivered outstanding results, exceeding expectations with their professionalism and attention to detail. Highly recommended!"'
    },
    {
      name: 'Bibechana Mahat',
      image: logoImage,
      desc: '"OSD2 provided exceptional service, delivering quality workmanship and exceeding all expectations. Highly recommend for any project."'
    }
  ]

  return (
    <>
    <div className="testimonials">
      {data.map((d)=>(
        <div className='test-container'>
          <div className='test-img'><img src={d.image} /></div>
          <div className='test-name'>{d.name}</div>
          <div className='test-desc'>{d.desc}</div>
        </div>
      ))}
    </div>
    </>
  );
}



export default Testimonial;
