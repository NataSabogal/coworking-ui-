import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: false,
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.bookingForm = this.fb.group({
      fechaInicio: ['', [Validators.required]],
      horaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      horaFin: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      idRecurso: ['', [Validators.required]],
      usuarioReserva: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Cargar datos iniciales si es necesario
  }

  verCatalogoRecursos(): void {
  console.log('Navegando a catálogo de recursos');
  this.router.navigate(['/resource']);
}

  pagoYFacturacion(): void {
    console.log('Navegando a pago y facturación');
    this.router.navigate(['/payments']);
  }

  realizarReserva(): void {
    if (this.bookingForm.valid) {
      console.log('Reserva realizada:', this.bookingForm.value);
      alert('Reserva realizada exitosamente');
      // Aquí iría la lógica para enviar los datos al backend
    } else {
      this.bookingForm.markAllAsTouched();
      alert('Por favor complete todos los campos');
    }
  }

  volverHome(): void {
    this.router.navigate(['/']);
  }

  agregar(): void {
    if (this.bookingForm.valid) {
      console.log('Agregando reserva:', this.bookingForm.value);
      // Aquí conectarás con tu backend para crear la reserva
      alert('Reserva agregada exitosamente');
    } else {
      this.bookingForm.markAllAsTouched();
      alert('Por favor complete todos los campos');
    }
  }

  buscar(): void {
    console.log('Buscando reservas');
    // Aquí conectarás con tu backend para buscar reservas
    alert('Función de búsqueda - Conectar con backend');
  }

  editar(): void {
    console.log('Editando reserva:', this.bookingForm.value);
    // Aquí conectarás con tu backend para editar la reserva
    alert('Función de editar - Conectar con backend');
  }

  eliminar(): void {
    const confirmacion = confirm('¿Está seguro de eliminar esta reserva?');
    if (confirmacion) {
      console.log('Eliminando reserva');
      // Aquí conectarás con tu backend para eliminar la reserva
      alert('Reserva eliminada');
    }
  }
}