import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/Contacto.class'

function ContactoComponent({contacto}) {
    return (
        <div>
            <h1>Nombre: {contacto.Nombre}</h1>
            <h2>Apelldio: {contacto.Apellido}</h2>
            <h3>Email: {contacto.Email}</h3>
            <h4>Conectado: {contacto.Conectado ? 'Esta conectado' : 'No esta conectado'}</h4>    
        </div>
    )
}
ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
  }

export default ContactoComponent
