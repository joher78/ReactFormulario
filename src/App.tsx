

import './App.css'
import { UsuarioContextProvider } from './presentarion/context/UsuarioContext'
import Usuario from './presentarion/pages/Usuario'

function App() {
 
  return (
    <UsuarioContextProvider>
      <Usuario></Usuario>
    </UsuarioContextProvider>
  
  )
}

export default App
