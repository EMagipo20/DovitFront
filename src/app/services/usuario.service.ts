import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import { Rol } from '../models/rol';
import { RolService } from './rol.service';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = `${environment.chBase}/Usuarios`;
  private listChange = new Subject<Usuario[]>();

  constructor(private http: HttpClient, private rolService: RolService) {}

  // Método para obtener todos los usuarios
  public listarTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/ListarTodo`);
  }

  // Método para crear un nuevo usuario y su rol asociado
  public crear(usuario: Usuario, rolNombre: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/Agregar`, usuario).pipe(
      tap(createdUser => {
        const newRol = new Rol();
        newRol.rol = rolNombre;
        newRol.user = createdUser;
        this.rolService.crearRol(newRol).subscribe();
      })
    );
  }

  // Método para eliminar un usuario
  public eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Eliminar/${id}`);
  }

  // Emitir cambios en la lista de usuarios
  public setList(newList: Usuario[]) {
    this.listChange.next(newList);
  }

  // Observar cambios en la lista de usuarios
  public getList(): Observable<Usuario[]> {
    return this.listChange.asObservable();
  }
}