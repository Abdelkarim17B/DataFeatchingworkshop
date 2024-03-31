import React from 'react'

function Card({id, title, body}) {
  return (
    <div style={{display: 'flex', width: 240, flexDirection: 'column', gap: 4, padding: 8, borderWidth: 2, borderStyle: 'solid', borderColor: '#000000', borderRadius: 5}}>
        <h4>{id}</h4>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
  )
}

export default Card