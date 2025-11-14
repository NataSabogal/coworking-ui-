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
    this.router.navigate(['/catalogo-recursos']);
  }

  pagoYFacturacion(): void {
    console.log('Navegando a pago y facturación');
    this.router.navigate(['/pago-facturacion']);
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
}