import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Minus, Plus } from '../icons'
import { getBEMClasses } from '../shared/utils'

const Collapsible = (props) => {
  const { collapsibleTitle, children, collapsible, additionalClassName, id } = props
  const [isOpen, setIsOpen] = useState(collapsible)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div id={id} className={getBEMClasses('collapsible',{}, additionalClassName)}>
      <div className='collapsible__content' onClick={toggleCollapse}>
        <div className='collapsible__title'>
          <label>{collapsibleTitle}</label>
        </div>
        <div className='collapsible__icon'>
          {isOpen ? <Minus  onClick={toggleCollapse}/> : <Plus onClick={toggleCollapse}/>}
        </div>
      </div>
      {isOpen && <div className='collapsible__children'>{children}</div>}
    </div>

  )
}

Collapsible.defaultProps = {
  collapsible: false,
  onChangeStateCollapsible: () => {}
}

Collapsible.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  withBorder: PropTypes.any,
  collapsible: PropTypes.bool,
  additionalClassName: PropTypes.string,
  onChangeStateCollapsible: PropTypes.func,
}

export default Collapsible