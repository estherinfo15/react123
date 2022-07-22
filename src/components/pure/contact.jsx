import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent=({contact})=> {
        return (
            <div>
                <h1>Nombre: { contact.nombre }</h1>
                <h2>Apellidos: { contact.apellidos }</h2>
                <h3>Email: { contact.email }</h3>
                <h4>Status: { contact.status ? 'Contacto en Linea':'Contacto No disponible' }</h4>
            </div>
        );
    };

    ContactComponent.propTypes ={
        contact:PropTypes.instanceOf(Contact)
    };

export default ContactComponent;
