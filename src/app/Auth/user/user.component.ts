import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public usuarioForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      enabled: [true, Validators.required],
      rol: ['', Validators.required]
    });
  }

  registrarUsuario(): void {
    if (this.usuarioForm.valid) {
      const nuevoUsuario: Usuario = this.usuarioForm.value;
      const rolNombre: string = this.usuarioForm.get('rol')?.value;

      // Modifica esta llamada para pasar el nombre del rol
      this.usuarioService.crear(nuevoUsuario, rolNombre).subscribe({
        next: (data) => {
          console.log('Usuario y rol registrados:', data);
          this.router.navigate(['/listar']).then(() => {
            window.location.reload();
          });
        },
        error: (error) => {
          console.error('Error al registrar el usuario y el rol:', error);
        }
      });
    }
  }
}
