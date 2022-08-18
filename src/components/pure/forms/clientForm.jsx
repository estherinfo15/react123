import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Client } from '../../../models/client.class';


const ClientForm = ({ add }) => {
    const nameRef = useRef('');
    const lastnameRef = useRef('');
    const emailRef = useRef('');

    function addClient(e) {
        e.preventDefault();
        const newClient = new Client(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newClient);
    }

    return (
        <form onSubmit={addClient} className='d-flex justify-content-center align-items-center mb-8'>
            <div className="form-group">
                <label >Client Name</label>
                <input ref={nameRef} type="text" className="form-control" id="inputName" placeholder="Enter Client Name" required autoFocus />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input ref={lastnameRef} type="text" className="form-control" id="inputLastname" placeholder="Enter Last Name" required autoFocus/>
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input ref={emailRef} type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" required autoFocus/>
            </div>
            
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    );
}

ClientForm.propTypes={
    add:PropTypes.func.isRequired
}

export default ClientForm;
