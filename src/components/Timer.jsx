import React from 'react'

const Timer = ({time}) => {
  if (time) return (
    <p><small>{time}</small></p>
  )
}

export default Timer