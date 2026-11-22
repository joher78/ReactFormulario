import { UsuarioModel } from '../../domain/models/UsuarioModel';


export class usuarioAdapter {
  
async listar(): Promise<UsuarioModel[]> {
    return usuariosMock;
  }
  
  
}