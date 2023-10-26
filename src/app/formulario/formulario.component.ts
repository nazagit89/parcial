import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  contacto: any = {
    nombre: '',
    apellido: '',
    correo: '',
    mensaje: '',
  };

}


