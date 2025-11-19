import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface PagoData {
  idPago: number;
  idReserva: number;
  monto: number;
  fechaPago: string;
  metodoPago: string;
}

@Component({
  selector: 'app-bill',
  standalone: false,
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  fechaBusqueda: string = '';
  pagoData: PagoData | null = null;
  loading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtener la fecha de los query params si viene desde payments
    this.route.queryParams.subscribe(params => {
      if (params['fecha']) {
        this.fechaBusqueda = params['fecha'];
        this.buscarPorFecha();
      }
    });
  }

  buscarPorFecha(): void {
    if (!this.fechaBusqueda) {
      alert('Por favor seleccione una fecha');
      return;
    }

    this.loading = true;
    this.pagoData = null;

    // Simular llamada al backend
    // AQUÍ CONECTARÁS CON TU ENDPOINT: GET /api/pagos/listar-por-fecha?fecha=${this.fechaBusqueda}
    console.log('Buscando pagos para fecha:', this.fechaBusqueda);

    // Simulación de respuesta del backend (elimina esto cuando conectes con tu API real)
    setTimeout(() => {
      // Simulación de datos - REEMPLAZA ESTO con tu llamada HTTP real
      const mockResponse: PagoData[] = [
        {
          idPago: 1,
          idReserva: 10,
          monto: 150,
          fechaPago: this.fechaBusqueda,
          metodoPago: "Tarjeta de crédito"
        }
      ];

      if (mockResponse && mockResponse.length > 0) {
        this.pagoData = mockResponse[0];
      } else {
        this.pagoData = null;
      }

      this.loading = false;
    }, 1000);

    /* 
    // CÓDIGO REAL PARA CONECTAR CON TU BACKEND (descomenta cuando estés listo):
    
    this.http.get<PagoData[]>(`${this.apiUrl}/pagos/listar-por-fecha`, {
      params: { fecha: this.fechaBusqueda }
    }).subscribe({
      next: (response) => {
        if (response && response.length > 0) {
          this.pagoData = response[0];
        } else {
          this.pagoData = null;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al buscar pagos:', error);
        alert('Error al buscar los datos. Por favor intente nuevamente.');
        this.loading = false;
      }
    });
    */
  }

  imprimirFactura(): void {
    if (!this.pagoData) {
      alert('No hay factura para imprimir');
      return;
    }
    
    window.print();
  }

  descargarFactura(): void {
    if (!this.pagoData) {
      alert('No hay factura para descargar');
      return;
    }
    
    // Aquí puedes implementar la lógica para generar y descargar un PDF
    console.log('Descargando factura...', this.pagoData);
    alert('Función de descarga PDF - Implementar según necesidades');
  }

  volver(): void {
    this.router.navigate(['/payments']);
  }
}