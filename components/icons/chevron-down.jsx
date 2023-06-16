import React from 'react'
import IconSvg from './svg-icon'

const ChevronDown = (props) => {
  return (
    <IconSvg
      className='icon icon-tabler icon-tabler-chevron-down'
      {...props}>
        <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
        <path d='M6 9l6 6l6 -6' />
    </IconSvg>
  )
}

export default ChevronDown
