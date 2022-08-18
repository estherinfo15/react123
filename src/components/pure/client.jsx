import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Client } from '../../models/client.class';
import '../../styles/clients.scss';



const ClientComponent = ({client, status, remove}) => {
    useEffect(() => {
        console.log('Client created');
        return () => {
            console.log(`Client:${client.name} is going to unmount...}`);
        };
    }, [client])

    function clientIconCompleted() {
        if (client.status) {
            return (<i onClick={() => status(client)} className='bi-toggle-on client-action' style={{ color: 'green' }} title='Conectado'></i>)
        } else {
            return (<i onClick={() => status(client)} className='bi-toggle-off client-action' style={{ color: 'green' }} title='Desconectado'></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{client.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{client.lastname}</span>
            </td>
            <td className='align-middle'>
            <span className='ms-2'>{client.email}</span>
            </td>
            <td className='align-middle'>
                {/**Execution of function to return icon depending on completion */}
                <span>{clientIconCompleted()}</span>
                <i className='bi-trash client-action' style={{ color: 'tomato', fontSize: '20px' }} onClick={() => remove(client)}></i>
            </td>
        </tr>
    );
}

ClientComponent.propTypes={
    client:PropTypes.instanceOf(Client),
    status:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired
};



export default ClientComponent;
