import React from 'react'
import Button from '../components/Button'
import GitIcon from '../components/GitIcon'
import SlackIcon from '../components/SlackIcon'


export default function Main() {
  return (
    <main>
        <div className="main-wrapper">
           
            <a href="https://training.zuri.team/" target="_blank" rel="noreferrer">
            <Button
            text='Zuri Team'
            id="btn__zuri"
            /></a>

            <a href="https://books.zuri.team/" target="_blank" rel="noreferrer" >    
            <Button
            text='Zuri Books'
            txt=' Books about Design and Coding available here'
            id="books"
            /></a>

            <a href='https://books.zuri.team./python-for-beginners?ref_id=<ThomyLowe' target="_blank" rel="noreferrer">
            <Button
            text='Python Books'
            txt="Find the book about Basics of Python here"
            id="book__python"
            /></a>

            <a href="https://background.zuri.team" target="_blank"  rel="noreferrer">
            <Button
            text='Background Check For Coders'
            txt="Find out more details about background coders"
            id="pitch"
            />
            </a>

            <a href="https://books.zuri.team/design-rules" target="_blank" rel='noreferrer'>
            <Button
            text='Design Books'
            txt='Get a Free Design Book offered by Zuri'
            id="book__design"
            />
            </a>
        </div>
        <div className='icons-part'>
           <SlackIcon/>
           <GitIcon/>


           
        </div>
    </main>
    
  )
}
