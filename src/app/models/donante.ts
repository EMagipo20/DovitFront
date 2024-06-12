import { Usuario } from "./usuario";

export class Donante {
    id: number = 0;
    nombreCompleto: string = '';
    contactoTelefonico: string = '';
    departamento: string = '';
    distrito: string = '';
    direccion: string = '';
    usuarioId: Usuario = new Usuario()
}