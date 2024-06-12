import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';  // Asegúrate de importar Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,          
    FormsModule,        
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule 
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}  // Inyecta el Router aquí

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.errorMessage = null;
        this.successMessage = 'Inicio de sesión exitoso';
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }

  private handleError(error: any): void {
    if (error.status === 401) {
      this.errorMessage = 'Usuario o contraseña inválidos';
    } else {
      this.errorMessage = 'Error en el servidor, por favor intenta de nuevo más tarde';
    }
    this.successMessage = null;
    console.error('Login error', error);
  }
}
