import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


//rfc para crear una nueva funcion
const ContactListComponent = () => {
    const defaultContact=new Contact('esther','dominguez','esther@gmail.com',false);
    return (
        <div>
        <div>
            tus contactos:
        </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
}

export default ContactListComponent;
