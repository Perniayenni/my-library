import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getBEMClasses } from '../../shared/utils';

const LazyImage = (props) => {
  const { url, alt, width, loader, additionalClassName, loaderDuration } = props
  const [imageSrc, setImageSrc] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [haveError, setHaveError] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      setImageSrc(url);
      if (loaderDuration){
        setTimeout(() => {
          setShowLoader(false);
        }, loaderDuration);
      }else{
        setShowLoader(false);
      }
    };

    image.onerror = () => setHaveError(true)
    
  }, [url, loaderDuration]);
  

  if (!imageSrc || showLoader) {
    return (
      <>
       { haveError ? (<img className={getBEMClasses('', {}, additionalClassName)} src={notFound} />) : (
        <div className={getBEMClasses('lazy-image', {}, additionalClassName)}>
          {loader}
       </div>
      ) }
      </>
    )
  }else {
    return <img className={getBEMClasses('', {}, additionalClassName)} alt={alt} src={url} width={width} />
  }
  
}

LazyImage.defaultProps = {
  url : null,
  loader: 'Loading...',
  loaderDuration: null
}

LazyImage.propTypes = {
  additionalClassName: PropTypes.string,
  url: PropTypes.string,
  loader: PropTypes.node,
  loaderDuration: PropTypes.number
}

export default LazyImage
