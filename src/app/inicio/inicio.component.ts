import { Component } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
import { Datos } from '../modelos/datos';
import { Verdura } from '../modelos/verdura';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  verduras: Verdura[]=[];

  info?: Datos;
  constructor(public datosService: DatosService){

  }

  ngOnInit(): void {
    this.datosService.obtenerDatos().subscribe((data:any) => {
      this.datosService=data;
      this.info=data;
      this.verduras=data.verduras;
      console.log(data);
    })
  }

}
