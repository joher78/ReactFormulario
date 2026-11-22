import type { UsuarioModel } from "../../domain/models/UsuarioModel";


export class UsuariosMockRepository {

  async usuarioList (): Promise <UsuarioModel[]>  {
 return [
  {
    id: 1,
    primerNombre: 'Carlos',
    segundoNombre: 'Andrés',
    primerApellido: 'Gómez',
    segundoApellido: 'Rodríguez',
    fechaNacimiento: '1990-05-15',
    estadoCivil: 'Casado',
    gradoEstudio: 'Profesional',
    telefono: '3001234567'
  },
  {
    id: 2,
    primerNombre: 'María',
    segundoNombre: 'Fernanda',
    primerApellido: 'López',
    segundoApellido: 'Martínez',
    fechaNacimiento: '1995-08-20',
    estadoCivil: 'Soltera',
    gradoEstudio: 'Universitario',
    telefono: '3109876543'
  },
  {
    id: 3,
    primerNombre: 'Juan',
    segundoNombre: 'David',
    primerApellido: 'Pérez',
    segundoApellido: 'Ramírez',
    fechaNacimiento: '1988-02-10',
    estadoCivil: 'Casado',
    gradoEstudio: 'Posgrado',
    telefono: '3154567890'
  },
  {
    id: 4,
    primerNombre: 'Laura',
    segundoNombre: 'Isabel',
    primerApellido: 'Torres',
    segundoApellido: 'Castro',
    fechaNacimiento: '2000-11-25',
    estadoCivil: 'Soltera',
    gradoEstudio: 'Tecnólogo',
    telefono: '3201234567'
  }
];
  }
}