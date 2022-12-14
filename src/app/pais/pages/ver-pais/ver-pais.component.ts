import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.buscarPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe(pais => {
        this.pais = pais;
      });


    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this.paisService.buscarPaisPorAlpha(id)
    //       .subscribe({
    //         next: (pais) => {
    //           this.pais = pais;
    //         },
    //         error: (err) => {
    //           console.log(err);
    //         }
    //       });
    //   });
  }

  imprimir(objeto: any) {
    console.log(objeto);
  }
}
