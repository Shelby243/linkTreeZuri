import React from 'react'
import pic from '../images/photo.jpeg'

export default function UserProfile() {
  return (
    <div className="user-profile">
        <img src={pic} alt='' id="profile_img"/>
        <p id="twitter">ShelbyPadre</p>
        <p id="slack">Thomy Lowe</p>
      
    </div>
  )
}
