import React from 'react'
import IconSvg from './svg-icon'

const Plus = (props) => {
  return (
    <IconSvg
      className='icon icon-tabler icon-tabler-plus'
      {...props}>
        <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
        <path d="M12 5l0 14" />
        <path d="M5 12l14 0" />
    </IconSvg>
  )
}

export default Plus