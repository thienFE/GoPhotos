import React from 'react'
import "./OnTopScroll.scss"

function OnTopScroll() {
  return (
    <div onClick={() => {
        window.scrollTo(0, 0)
    }} className='top-arrow'>↑</div>
  )
}

export default OnTopScroll