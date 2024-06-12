import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent implements OnInit {
  public chDisplayedColumns: string[] = [
    'id',
    'username',
    'password',
    'email',
    'enabled',
    'fechaRegistro'
  ];
  public chDataSource: MatTableDataSource<Usuario> = new MatTableDataSource();

  @ViewChild(MatPaginator) chPaginator!: MatPaginator;

  constructor(private chService: UsuarioService) {}

  ngOnInit(): void {
    this.chService.listarTodos().subscribe((chData: Usuario[]) => {
      console.log(chData)
      this.chDataSource = new MatTableDataSource(chData);
    });
  }

  ngAfterViewInit() {
    this.chDataSource.paginator = this.chPaginator;
  }
}