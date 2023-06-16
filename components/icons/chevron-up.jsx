import React from 'react'
import IconSvg from './svg-icon'

const ChevronUp = (props) => {
  return (
    <IconSvg
      className='icon icon-tabler icon-tabler-chevron-up'
      {...props} >
        <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
        <path d='M6 15l6 -6l6 6' />
    </IconSvg>
  )
}

export default ChevronUp