import React from 'react'

export default function Button({text,txt}) {
  return (
    <div>
      <button>
        <h4>{text}</h4><br/>
        <p>{txt}</p>
      </button>
    </div>
  )
}
