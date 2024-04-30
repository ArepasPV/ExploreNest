import { Component } from '@angular/core';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent {
  responses: any = {
    nightLife: false,
    historical: false,
    nature:false,
    beach:false,

    camping:false,
    eco:false,
    hoteles:false,

    alquiler:false,
    publico:false,
    privado:false,

    museos:false,
    urban:false,
    deportes:false,
    natureeco:false,

  };

  constructor() {
    
  }

  Siguiente() {
    
  }
}
