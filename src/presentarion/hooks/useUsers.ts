import React from 'react'


function useUsers() {

  const[usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    setUsuarios(usuarioAdapter)
  }, [])
  
  
  return {
    usuarios
  };
}

export default useUsers;