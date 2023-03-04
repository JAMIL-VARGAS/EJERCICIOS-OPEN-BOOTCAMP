import React from 'react'
import ContactoComponent from './componentes/ContactoComponent'
import { Contacto } from './models/Contacto.class'
import './App.css'

function App() {
  const defaultContacto = new Contacto('Nombre Default','Apellido Default','Un correo valido',false)
  return (
    <div>
      <ContactoComponent contacto={defaultContacto}></ContactoComponent>
    </div>
  )
}

export default App
