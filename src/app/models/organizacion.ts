import { Usuario } from "./usuario";

export class OrganizacionDto {
    id: number = 0;
    nombreOrganizacion: string = '';
    departamento: string = '';
    distrito: string = '';
    direccion: string = '';
    nombreRepresentante: string = '';
    numeroTelefonicoRepresentante: string = '';
    correoElectronicoRepresentante: string = '';
    usuarioId: Usuario = new Usuario(); 
}