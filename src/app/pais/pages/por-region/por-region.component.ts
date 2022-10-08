import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  
  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string) : string {
    return (region === this.regionActiva) ? 'btn btn-primary me-1' : 'btn btn-outline-primary me-1';
  }

  activarRegion(termino: string) {
    if(this.regionActiva === termino) return;
    
    this.regionActiva = termino;
    this.paises = [];

    this.paisService.buscarRegion(termino)
      .subscribe({
        next: (paises) => {
          this.paises = paises;
        },
        error: (err) => {
          this.paises = [];
        }
      });
  }
}
