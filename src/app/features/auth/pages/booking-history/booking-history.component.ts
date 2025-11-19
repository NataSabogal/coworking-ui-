import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Reserva {
  idReserva: number;
  fechaInicio: string;
  horaInicio: string;
  fechaFin: string;
  horaFin: string;
  estado: string;
  idRecurso: number;
  usuarioReserva: number;
}

@Component({
  selector: 'app-booking-history',
  standalone: false,
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {
  reservas: Reserva[] = [];
  fechaInicio: string = '';
  fechaFin: string = '';
  loading: boolean = false;
  yaSeHizoBusqueda: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Establecer fechas predeterminadas (último mes)
    const hoy = new Date();
    const haceUnMes = new Date(hoy);
    haceUnMes.setMonth(haceUnMes.getMonth() - 1);
    
    this.fechaInicio = this.formatearFecha(haceUnMes);
    this.fechaFin = this.formatearFecha(hoy);
  }

  formatearFecha(fecha: Date): string {
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  buscarReservas(): void {
    if (!this.fechaInicio || !this.fechaFin) {
      alert('Por favor seleccione ambas fechas');
      return;
    }

    if (new Date(this.fechaInicio) > new Date(this.fechaFin)) {
      alert('La fecha de inicio no puede ser mayor a la fecha fin');
      return;
    }

    this.loading = true;
    this.yaSeHizoBusqueda = true;
    this.reservas = [];

    // Simulación de llamada al backend
    // AQUÍ CONECTARÁS CON TU ENDPOINT: GET /api/reservas/buscar-por-rango?fechaInicio=${this.fechaInicio}&fechaFin=${this.fechaFin}
    console.log('Buscando reservas desde:', this.fechaInicio, 'hasta:', this.fechaFin);

    // Simulación de datos - REEMPLAZA ESTO con tu llamada HTTP real
    setTimeout(() => {
      const mockResponse: Reserva[] = [
        {
          idReserva: 1,
          fechaInicio: "2025-10-15",
          horaInicio: "09:00",
          fechaFin: "2025-10-15",
          horaFin: "11:00",
          estado: "confirmada",
          idRecurso: 3,
          usuarioReserva: 123456789
        },
        {
          idReserva: 2,
          fechaInicio: "2025-10-16",
          horaInicio: "14:00",
          fechaFin: "2025-10-16",
          horaFin: "16:00",
          estado: "confirmada",
          idRecurso: 5,
          usuarioReserva: 123456789
        },
        {
          idReserva: 3,
          fechaInicio: "2025-10-20",
          horaInicio: "10:00",
          fechaFin: "2025-10-20",
          horaFin: "12:00",
          estado: "cancelada",
          idRecurso: 2,
          usuarioReserva: 123456789
        }
      ];

      this.reservas = mockResponse;
      this.loading = false;
    }, 1000);

    /* 
    // CÓDIGO REAL PARA CONECTAR CON TU BACKEND (descomenta cuando estés listo):
    
    this.http.get<Reserva[]>(`${this.apiUrl}/reservas/buscar-por-rango`, {
      params: {
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin
      }
    }).subscribe({
      next: (response) => {
        this.reservas = response;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al buscar reservas:', error);
        alert('Error al buscar las reservas. Por favor intente nuevamente.');
        this.loading = false;
      }
    });
    */
  }

  verDetalle(reserva: Reserva): void {
    console.log('Ver detalle de reserva:', reserva);
    alert(`Detalle de Reserva #${reserva.idReserva}\n\nFecha: ${reserva.fechaInicio}\nHora: ${reserva.horaInicio} - ${reserva.horaFin}\nEstado: ${reserva.estado}\nRecurso: ${reserva.idRecurso}`);
    // Aquí puedes navegar a una página de detalle o abrir un modal
  }

  cancelarReserva(reserva: Reserva): void {
    if (reserva.estado !== 'confirmada') {
      return;
    }

    const confirmacion = confirm(`¿Está seguro de cancelar la reserva #${reserva.idReserva}?`);
    if (confirmacion) {
      console.log('Cancelando reserva:', reserva.idReserva);
      // Aquí conectarás con tu backend para cancelar la reserva
      alert('Reserva cancelada exitosamente');
      
      // Actualizar estado local
      const index = this.reservas.findIndex(r => r.idReserva === reserva.idReserva);
      if (index !== -1) {
        this.reservas[index].estado = 'cancelada';
      }
    }
  }

  volver(): void {
    this.router.navigate(['/account']);
  }
}