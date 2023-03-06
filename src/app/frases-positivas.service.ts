import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrasesPositivasService {

  constructor(private positivo:HttpClient) {}

    obtenerFraseRandom(){
      const respuesta=this.positivo.get("https://api.quotable.io/random")
      return respuesta
    }

}
