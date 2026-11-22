
import { useContext } from "react";
import UsuarioContext from "../context/UsuarioContext";


function useUsers() {

 
  const context = useContext(UsuarioContext)

 if(!context){
  throw new Error("arguments");
 }

 return context
  
}

export default useUsers;
