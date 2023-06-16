import React from 'react'
import IconSvg from './svg-icon'

const Minus = (props) => {
  return (
    <IconSvg
      className='icon icon-tabler icon-tabler-minus'
      {...props}>
        <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
        <path d="M5 12l14 0" />
    </IconSvg>
  )
}

export default Minus