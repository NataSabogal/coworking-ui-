import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Recurso {
  idRecurso: number;
  tipoRecurso: string;
  nombreRecurso: string;
  valorHora: number;
  descripcion: string;
  fechaInicioTarifa: string;
  fechaFinTarifa: string;
  estado: string;
}

@Component({
  selector: 'app-resource',
  standalone: false,
  templateUrl: './recurso.component.html',
  styleUrls: ['./recurso.component.scss']
})
export class ResourceComponent implements OnInit {
  recursos: Recurso[] = [];
  recursosFiltrados: Recurso[] = [];
  recursoSeleccionado: Recurso | null = null;
  
  filtroTipo: string = '';
  busqueda: string = '';
  loading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cargarRecursos();
  }

  cargarRecursos(): void {
    this.loading = true;

    // Simulación de llamada al backend
    // AQUÍ CONECTARÁS CON TU ENDPOINT: GET /api/recursos
    console.log('Cargando recursos...');

    // Simulación de datos - REEMPLAZA ESTO con tu llamada HTTP real
    setTimeout(() => {
      this.recursos = [
        {
          idRecurso: 1,
          tipoRecurso: "SALA_REUNIONES",
          nombreRecurso: "Sala A - Primer Piso",
          valorHora: 50,
          descripcion: "Sala de reuniones con capacidad para 10 personas",
          fechaInicioTarifa: "2023-01-01",
          fechaFinTarifa: "2023-12-31",
          estado: "activo"
        },
        {
          idRecurso: 2,
          tipoRecurso: "OFICINA_PRIVADA",
          nombreRecurso: "Sala B lo mas privado",
          valorHora: 80,
          descripcion: "Sala de reuniones privadas con capacidad para 5 personas",
          fechaInicioTarifa: "2025-01-01",
          fechaFinTarifa: "2026-12-31",
          estado: "activo"
        },
        {
          idRecurso: 3,
          tipoRecurso: "ESCRITORIO_FIJO",
          nombreRecurso: "Escritorio Premium 01",
          valorHora: 30,
          descripcion: "Escritorio individual con silla ergonómica y monitor",
          fechaInicioTarifa: "2024-01-01",
          fechaFinTarifa: "2024-12-31",
          estado: "activo"
        },
        {
          idRecurso: 4,
          tipoRecurso: "AUDITORIO",
          nombreRecurso: "Auditorio Principal",
          valorHora: 200,
          descripcion: "Auditorio con capacidad para 100 personas, equipado con proyector y sistema de sonido",
          fechaInicioTarifa: "2024-01-01",
          fechaFinTarifa: "2024-12-31",
          estado: "activo"
        },
        {
          idRecurso: 5,
          tipoRecurso: "ZONA_COMUN",
          nombreRecurso: "Zona de Descanso",
          valorHora: 0,
          descripcion: "Área común con sofás, mesas y wifi gratuito",
          fechaInicioTarifa: "2024-01-01",
          fechaFinTarifa: "2024-12-31",
          estado: "activo"
        },
        {
          idRecurso: 6,
          tipoRecurso: "RECURSO_TECNOLOGICO",
          nombreRecurso: "Proyector HD",
          valorHora: 25,
          descripcion: "Proyector de alta definición con cables y control remoto",
          fechaInicioTarifa: "2024-01-01",
          fechaFinTarifa: "2024-12-31",
          estado: "activo"
        },
        {
          idRecurso: 7,
          tipoRecurso: "NO_ESPECIFICADO",
          nombreRecurso: "Recurso General",
          valorHora: 15,
          descripcion: "Recurso de uso general disponible para reserva",
          fechaInicioTarifa: "2024-01-01",
          fechaFinTarifa: "2024-12-31",
          estado: "activo"
        }
      ];

      this.recursosFiltrados = [...this.recursos];
      this.loading = false;
    }, 1000);

    /* 
    // CÓDIGO REAL PARA CONECTAR CON TU BACKEND (descomenta cuando estés listo):
    
    this.http.get<Recurso[]>(`${this.apiUrl}/recursos`).subscribe({
      next: (response) => {
        this.recursos = response;
        this.recursosFiltrados = [...this.recursos];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar recursos:', error);
        alert('Error al cargar los recursos. Por favor intente nuevamente.');
        this.loading = false;
      }
    });
    */
  }

  aplicarFiltros(): void {
    this.recursosFiltrados = this.recursos.filter(recurso => {
      const cumpleTipo = !this.filtroTipo || recurso.tipoRecurso === this.filtroTipo;
      const cumpleBusqueda = !this.busqueda || 
        recurso.nombreRecurso.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        recurso.descripcion.toLowerCase().includes(this.busqueda.toLowerCase());
      
      return cumpleTipo && cumpleBusqueda;
    });
  }

  seleccionarRecurso(recurso: Recurso): void {
    if (this.recursoSeleccionado?.idRecurso === recurso.idRecurso) {
      this.recursoSeleccionado = null;
    } else {
      this.recursoSeleccionado = recurso;
    }
  }

  formatearTipo(tipo: string): string {
    const tipos: { [key: string]: string } = {
      'NO_ESPECIFICADO': 'General',
      'OFICINA_PRIVADA': 'Oficina',
      'ESCRITORIO_FIJO': 'Escritorio',
      'SALA_REUNIONES': 'Sala',
      'AUDITORIO': 'Auditorio',
      'ZONA_COMUN': 'Zona Común',
      'RECURSO_TECNOLOGICO': 'Tecnológico'
    };
    return tipos[tipo] || tipo;
  }

  confirmarSeleccion(): void {
    if (!this.recursoSeleccionado) {
      alert('Por favor seleccione un recurso');
      return;
    }

    console.log('Recurso seleccionado:', this.recursoSeleccionado);
    
    // Aquí puedes guardar el recurso seleccionado en un servicio o pasarlo como parámetro
    // Por ahora lo guardamos en localStorage para que booking lo pueda recuperar
    localStorage.setItem('recursoSeleccionado', JSON.stringify(this.recursoSeleccionado));
    
    alert(`Recurso "${this.recursoSeleccionado.nombreRecurso}" seleccionado correctamente`);
    
    // Volver a booking con el recurso seleccionado
    this.router.navigate(['/booking']);
  }

  volver(): void {
    this.router.navigate(['/booking']);
  }
}