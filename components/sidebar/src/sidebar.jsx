import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { getBEMClasses } from '../../shared/utils'
import { Close } from '../../icons'

const SideBar = (props) => {
  const { additionalClassName, 
    onClose, footer, children, 
    onClickOutside, backgroundColor, 
    buttonClose, colorButton } = props

  const refBox = useRef(null);
  const content = useRef(null)
  const documentRoot = document.body

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (refBox.current && !refBox.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside ]);

  return ReactDOM.createPortal(
    <div className={getBEMClasses('sidebar', {}, additionalClassName)} ref={content}>
      <div ref={refBox} className='sidebar__content' style={{backgroundColor: backgroundColor}} >
        { buttonClose &&
        <div className='sidebar__close' > 
          <Close color={colorButton} width={25} height={25} onClick={onClose}/> 
        </div>
        }
        <div className='sidebar__children'>{children}</div>
        <div className='sidebar__footer'>{footer}</div>
      </div>
    </div>,
    documentRoot
  )
}

SideBar.defaultProps = {
  onClose : () => {},
  onClickOutside: () => {},
  backgroundColor: 'white',
  buttonClose: false
}

SideBar.propTypes = {
  additionalClassName: PropTypes.string,
  onClose: PropTypes.func,
  onClickOutside: PropTypes.func,
  footer: PropTypes.node,
  backgroundColor: PropTypes.string,
  buttonClose: PropTypes.bool,
  colorButton: PropTypes.string
}

export default SideBar