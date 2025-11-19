import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.accountForm = this.fb.group({
      cedula: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Aquí podrías cargar los datos del usuario desde un servicio
   // this.loadUserData();
  }

  // loadUserData(): void {
  //   // Simulación de datos del usuario - reemplazar con servicio real
  //   const userData = {
  //     cedula: '123456789',
  //     nombre: 'Juan Pérez',
  //     email: 'juan.perez@example.com',
  //     telefono: '3001234567',
  //     direccion: 'Calle 123 #45-67',
  //     password: '******'
  //   };
    
  //   this.accountForm.patchValue(userData);
  // }

  verHistorialReservas(): void {
    console.log('Navegando a historial de reservas');
    this.router.navigate(['/booking-history']);
  }

  verNotificaciones(): void {
    console.log('Navegando a notificaciones');
    this.router.navigate(['/notificaciones']);
  }

  actualizarCuenta(): void {
    if (this.accountForm.valid) {
      console.log('Actualizando cuenta:', this.accountForm.value);
      // Aquí iría la lógica para actualizar los datos del usuario
      alert('Cuenta actualizada exitosamente');
    } else {
      this.accountForm.markAllAsTouched();
      alert('Por favor complete todos los campos correctamente');
    }
  }

  volverHome(): void {
    this.router.navigate(['/']);
  }
}