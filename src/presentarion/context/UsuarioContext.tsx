import  { createContext, useEffect, useState, type ReactNode } from 'react'
import type { UsuarioModel } from '../../domain/models/UsuarioModel';

import { UsuarioAdapter } from '../../infrastructure/adapters/UsuarioAdapter';
const usuarioAdapter = new UsuarioAdapter();

interface UsuariosContextType {
  usuarios: UsuarioModel[];
  loading: boolean;
  saveUsuario: (usuario: UsuarioModel) => void;
  eliminarUsuario: (id: number) => void
}

// Creamos el Context
 export const UsuarioContext = createContext<UsuariosContextType | undefined>(
  undefined
);


type Props = {
   children: ReactNode;
}

export function UsuarioContextProvider(props: Props) {

  const {children} = props;



 const [usuarios, setUsuarios] = useState<UsuarioModel[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {

    const cargar = async () => {
      try {
        const data = await usuarioAdapter.listar();
        setUsuarios(data);
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
      } finally {
        setLoading(false);
      }
    };

    cargar();

  }, []);

  function saveUsuario(usuario: UsuarioModel) {
    setUsuarios( [...usuarios,  usuario])
  }

  function eliminarUsuario(id:number) {
    console.log("elimina " + id)
  }

  return (
    <UsuarioContext.Provider value={{ usuarios: usuarios, loading : loading, saveUsuario: saveUsuario, eliminarUsuario: eliminarUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}

export default UsuarioContext