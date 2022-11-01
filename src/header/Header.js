import React from 'react'
import UserProfile from '../components/UserProfile'
import ShareBtn from '../components/ShareBtn'
import ShareBtn2 from '../components/ShareBtn2'

export default function Header() {
  return (
    
    <header>
        <div className="header-wrapper">
            <UserProfile/>
            <ShareBtn/>
            <ShareBtn2/>
        </div>
    </header>
    
  )
}
