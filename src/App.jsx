import './App.css';
import { url } from './config/api.js';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const mostrarUsuarios = async () => {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    setUsers(data);
  };

  useEffect(() => {
    mostrarUsuarios();
  }, []);

  return (
    <>
      <h1>Lista de usuarios</h1>
      <table className="table">
        <thead className="table__header">
          <tr className="table__row table__row--header">
            <th className="table__cell">Nombre</th>
            <th className="table__cell">Usuario</th>
            <th className="table__cell">Email</th>
            <th className="table__cell">Dirección</th>
            <th className="table__cell">Teléfono</th>
            <th className="table__cell">Sitio web</th>
            <th className="table__cell">Compañía</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="table__cell">{user.name}</td>
              <td className="table__cell">{user.username}</td>
              <td className="table__cell">{user.email}</td>
              <td className="table__cell">
                {`${user.address.street} ${user.address.suite}
                     ${user.address.city} 
                     ${user.address.zipcode} 
                     (${user.address.geo.lat}, ${user.address.geo.lng})`}
              </td>
              <td className="table__cell">{user.phone}</td>
              <td className="table__cell">
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {user.website}
                </a>
              </td>
              <td className="table__cell">
                {`${user.company.name}
                  ${user.company.catchPhrase}
                  ${user.company.bs}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
