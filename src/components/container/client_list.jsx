import React, { useState, useEffect } from 'react';
import { Client } from '../../models/client.class';
import ClientComponent from '../pure/client';
import '../../styles/clients.scss';
import ClientForm from '../pure/forms/clientForm';


const ClientListComponent = () => {
    const client1 = new Client('Marcos', 'Días', 'marcos@gmail.com', true);
    const client2 = new Client('Miriam', 'Medina', 'miriam@gmail.com', true);
    const client3 = new Client('Cristina', 'Salas', 'cris@gmail.com', false);

    const [clients, setClients] = useState([client1, client2, client3]);

    const [loadin, setLoading] = useState(true);

    useEffect( () => {
        console.log('Edición del status del cliente');
        setLoading(false);
        return () => {
            console.log('ClientList component is going unmount...');
        };
    }, [clients])


    function completeClient(client) {
        console.log('Data client completed', client);
        const index = clients.indexOf(client);
        const tmpClient = [...clients];
        tmpClient[index].status = !tmpClient[index].status;
        setClients(tmpClient);
    }

    function deleteClient(client) {
        console.log('Delete this Client', client);
        const index = clients.indexOf(client);
        const tmpClient = [...clients];
        tmpClient.splice(index, 1);
        setClients(tmpClient);
    }

    function addClient(client) {
        console.log('Register client', client)
        const index = clients.indexOf(client);
        const tmpClient = [...clients];
        tmpClient.push(client);
        setClients(tmpClient);
    }

    return (
        <div>
            <div className='card col-12'>
                <div className='card-header'>List Clients</div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client, index) => {
                                return (
                                    <ClientComponent
                                        key={index}
                                        client={client}
                                        status={completeClient}
                                        remove={deleteClient}>
                                        </ClientComponent>
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>
                <ClientForm add={addClient}></ClientForm>
            </div>

        </div>
    );
};



export default ClientListComponent;
