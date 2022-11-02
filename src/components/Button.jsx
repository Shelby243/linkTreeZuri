import React from 'react'

export default function Button({text,txt,id}) {
  return (
    <div>
      <button id={id} >
        <h4>{text}</h4><br/>
        <p>{txt}</p>
      </button>
    </div>
  )
}
