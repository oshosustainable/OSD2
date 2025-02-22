import React from 'react'
import './career.css'

const Career = () => {
  
  return (
    <>
    <div className="nocareer">
    <h2>OOPS!</h2>
    <h3>No current hiring!</h3>
    </div>

    <div className="career-form">
            <h5>Drop your CV anyway.</h5><br />
            <form action="https://formsubmit.co/osddevelopers@gmail.com" method="POST" className="app" target="_blank" encType='multipart/form-data' >
                <input type="text" name="firstname" id="fname" placeholder="First Name*" required /><br />

                <input type="text" name="lastname" id="lname" placeholder="Last Name*" required /><br />

                <label>&nbsp; CV : </label>
                <input type="file" name="CV" id='CV' style={{width: "200px"}}/><br />
                
                <input type="submit" name="submit" id="submit" value={"SUBMIT"}/>
            </form>
      </div>


    <hr />
    
    </>
  )
}

export default Career