import React from 'react'

const OptimizedComponent= React.memo(({text}) => {
  return (
    <button style={{backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: 15}}>{text}</button>
  )
}
)

export default OptimizedComponent