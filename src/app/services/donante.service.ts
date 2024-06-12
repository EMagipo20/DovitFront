import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Donante } from '../models/donante';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DonanteService {
  private baseUrl = `${environment.chBase}/Donantes`;
  private listChange = new Subject<Donante[]>();

  constructor(private http: HttpClient) {}

  // Método para obtener todos los donantes
  public listarTodos(): Observable<Donante[]> {
    return this.http.get<Donante[]>(`${this.baseUrl}/ListarTodo`);
  }

  // Método para registrar un nuevo donante
  public registrar(donante: Donante): Observable<Donante> {
    return this.http.post<Donante>(`${this.baseUrl}/Agregar`, donante);
  }

  // Método para actualizar un donante
  public actualizar(donante: Donante): Observable<Donante> {
    return this.http.put<Donante>(`${this.baseUrl}/Actualizar`, donante);
  }

  // Método para eliminar un donante
  public eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Eliminar/${id}`);
  }

  // Método para contar donantes por nombre completo
  public contarPorNombreCompleto(nombreCompleto: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/ContarPorNombreCompleto?nombreCompleto=${nombreCompleto}`);
  }

  // Método para buscar donantes por departamento y distrito
  public listarPorDepartamentoYDistrito(departamento: string, distrito: string): Observable<Donante[]> {
    return this.http.get<Donante[]>(`${this.baseUrl}/Buscar/${departamento}/${distrito}`);
  }

  // Método para buscar direcciones de donantes por distrito
  public listarDireccionDonantePorDistrito(distrito: string): Observable<Donante[]> {
    return this.http.get<Donante[]>(`${this.baseUrl}/BuscarDireccionDonantePorDistrito/${distrito}`);
  }

  // Emitir cambios en la lista de donantes
  public setList(newList: Donante[]) {
    this.listChange.next(newList);
  }

  // Observar cambios en la lista de donantes
  public getList(): Observable<Donante[]> {
    return this.listChange.asObservable();
  }
}
