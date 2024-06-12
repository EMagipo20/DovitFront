import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donante } from '../../../models/donante';
import { DonanteService } from '../../../services/donante.service';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.scss']
})
export class NuevoRegistroComponent implements OnInit {
  donanteForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private donanteService: DonanteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.donanteForm = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      contactoTelefonico: ['', Validators.required],
      departamento: ['', Validators.required],
      distrito: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  crearDonante(): void {
    if (this.donanteForm.valid) {
      const nuevoDonante: Donante = this.donanteForm.value;
      this.donanteService.registrar(nuevoDonante).subscribe({
        next: () => {
          console.log('Donante registrado exitosamente');
          this.router.navigate(['/donantes']).then(() => {
            window.location.reload();
          });
        },
        error: (error) => {
          console.error('Error al registrar el donante:', error);
        }
      });
    }
  }
}