import type { UsuarioModel } from "../../domain/models/UsuarioModel";
import { UsuariosMockRepository } from "../Mocks/UsuarioMockRepository";


export class UsuarioAdapter {

  private repository: UsuariosMockRepository;

  constructor() {
    this.repository = new UsuariosMockRepository();
  }

  async listar(): Promise<UsuarioModel[]> {
    return await this.repository.usuarioList();
  }
}