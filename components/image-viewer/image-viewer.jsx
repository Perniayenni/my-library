import React from 'react'
import PropTypes from 'prop-types'

const ImageViewer = (props) => {
  const { items } = props

  return (
    <div className="component">
      {items.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={item.title}
        />
      ))}
    </div>
);
};

ImageViewer.defaultProps = {
  thumbnailWidth: '80px',
  thumbnailHeight: '80px'
}
  
ImageViewer.propTypes = {
  additionalClassName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      thumbnail: PropTypes.string,
      launcher: PropTypes.node
  })).isRequired,
}
  

export default ImageViewer