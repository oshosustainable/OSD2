import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className="allcontact" id="allcontact">
        <div className="contact-content">
        <h1>CONTACT US</h1>
        <div className="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.402498716154!2d85.29800255932251!3d27.722399472052533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f5a3b427f3%3A0xd1eeada324209fa2!2sGrace%20Dental%20Care!5e0!3m2!1sen!2snp!4v1687243949822!5m2!1sen!2snp" width="100%" height="400px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{borderRadius:"10px"}}></iframe>
        </div>
        <div className="contact-details">
            <div className="contact-info">
                <h3>Location:</h3>
                <h5>Banasthali,Kathmandu,Nepal</h5>
                <h3>Email:</h3>
                <h5>osddevelopers@gmail.com</h5>
                <h3>Call</h3>
                <h5>+977 9851246689</h5>
            </div>

            <div className="contact-form">
            <form action="https://formsubmit.co/osddevelopers@gmail.com" method="POST" className="app" target="_blank">
                <input type="text" name="firstname" id="fname" placeholder="First Name*" required />

                <input type="text" name="lastname" id="lname" placeholder="Last Name*" required /><br /><br />

                <input type="number" name="contact" id="contact" placeholder="Contact Number*" required /><br /><br />
  
                <textarea name="message" id="message" placeholder="Message" defaultValue={""} /><br />
                
                <input type="submit" name="submit" id="submit" value={"Send Message"}/>
                </form>
            </div>

        </div>


        </div>






    </div>
  )
}

export default Contact