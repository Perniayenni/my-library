import React from 'react'
import IconSvg from './svg-icon'

const Close = (props) => {
  return (
    <IconSvg
      className='icon icon-tabler icon-tabler-x'
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </IconSvg>
  )
}

export default Close