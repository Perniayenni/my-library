import React, { useState } from 'react'
import Sidebar from '../../components/sidebar'
import './styles.scss'

export default {
    title: 'Components/Sidebar',
    parameters: {
      componentSubtitle: 'Sidebar Component',
    },
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {
      children: {
        description: 'The content or components to be rendered inside the Sidebar component',
      },
      footer: {
        description: 'The content or components to be rendered as the footer of the Sidebar component',
      },
      backgroundColor: {
        description: 'The background color of the Sidebar component'
      },
    },
}
  
export const sidebar = ({ children, footer, backgroundColor }) => {
  const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={()=> setOpen(!open)}>clickMe</button>
        {open && <Sidebar
          backgroundColor={backgroundColor}
          footer={footer}
          onClose={()=> setOpen(!open)}
          onClickOutside={()=> setOpen(!open)} >
          {children}
        </Sidebar>}
      </>
    )
}

sidebar.args = {
  footer: 'aqui el footer',
  children: (
    <div className='list'>
      <label>Inicio</label>
      <label>Blog</label>
      <label>Certificaciones</label>
      <label>Experiencia</label>
    </div>
  ),
  backgroundColor: 'white',
};