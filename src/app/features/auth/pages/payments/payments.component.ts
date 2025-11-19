import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  standalone: false,
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  paymentsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.paymentsForm = this.fb.group({
      idReserva: ['', [Validators.required]],
      monto: ['', [Validators.required, Validators.min(0)]],
      fechaPago: ['', [Validators.required]],
      metodoPago: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Cargar datos iniciales si es necesario
    // Por ejemplo, podrías recibir el ID de reserva desde la navegación
  }

  pagar(): void {
    if (this.paymentsForm.valid) {
      console.log('Procesando pago:', this.paymentsForm.value);
      // Aquí conectarás con tu backend para procesar el pago
      alert('Pago procesado exitosamente');
      // Podrías redirigir a una página de confirmación
    } else {
      this.paymentsForm.markAllAsTouched();
      alert('Por favor complete todos los campos correctamente');
    }
  }

  generarFactura(): void {
  if (this.paymentsForm.valid) {
    const fechaPago = this.paymentsForm.get('fechaPago')?.value;
    console.log('Generando factura para fecha:', fechaPago);
    // Navega pasando la fecha como parámetro
    this.router.navigate(['/bill'], { 
      queryParams: { fecha: fechaPago } 
    });
  } else {
    this.paymentsForm.markAllAsTouched();
    alert('Por favor complete la fecha de pago para generar la factura');
  }
}

  volver(): void {
    this.router.navigate(['/booking']);
  }
}