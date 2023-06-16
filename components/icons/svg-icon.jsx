import React from 'react'
import PropTypes from 'prop-types'

const IconSvg = (props) => {
  const { height, width, color, children, viewBox, name, fill, strokeWidth, strokeLinecap, strokeLinejoin } = props
  const colorIcon = color || '#333'

    return (
      <svg
          xmlns='http://www.w3.org/2000/svg'
          width={height}
          height={width}
          stroke={colorIcon}
          viewBox={viewBox}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          data-testid={`icon-${name}`}
          fill={fill}
          {...props}
      >
        {children}
      </svg>
    )
}

IconSvg.defaultProps = {
  height: 18,
  width: 18,
  viewBox: '0 0 24 24',
  strokeWidth:'1.5',
  strokeLinecap:'round',
  strokeLinejoin:'round',
  fill: 'none'
}

IconSvg.propTypes = {
  name: PropTypes.string,
  width: PropTypes.number,
  color: PropTypes.string,
  height: PropTypes.number,
  children: PropTypes.node,
  viewBox: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string,
  fill: PropTypes.string
}

export default IconSvg

