import React from 'react'
import pic from "../images/picture3.jpg"
import pic1 from "../images/picture4.png"

export default function Footer() {
  return (
    <footer>
         <div className='footer-wrapper' >
            
         <img src={pic1} alt='' className='img2' />
         <p>HNG Internship 9 Frontend Task</p>
         <img  src={pic} alt='' className='img1' />
         </div>
    </footer>
   
  )
}
