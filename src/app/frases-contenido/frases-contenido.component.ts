import { Component, OnInit } from '@angular/core';
import { FrasesPositivasService } from '../frases-positivas.service';

@Component({
  selector: 'app-frases-contenido',
  templateUrl: './frases-contenido.component.html',
  styleUrls: ['./frases-contenido.component.css']
})
export class FrasesContenidoComponent{
    informacionRecibida:any
    constructor(private variableServicio:FrasesPositivasService){
      variableServicio.obtenerFraseRandom().subscribe((data)=>{
        this.informacionRecibida=data
      })
    }

    refrescarfrase(){
      this.variableServicio.obtenerFraseRandom().subscribe((data)=>{
        this.informacionRecibida=data
      })
    }
}
