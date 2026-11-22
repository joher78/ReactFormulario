import React from 'react'
import useUsers from '../hooks/useUsers.ts'

interface Props {
  // Define your props here
}

const Usuario = (props: Props) => {
 const {usuarios} = useUsers();
  return (
    <div>
      <h1>usiarios</h1>
      {JSON.stringify(usuarios)}
    </div>
  );
};

export default Usuario;