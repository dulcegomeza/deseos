import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';
@Injectable()
export class ListaDeseosService {
  listas:Lista[]=[];
  constructor() {
    let lista1 = new Lista('Cosas');
    let lista2 = new Lista('Personas');
    let lista3 = new Lista('Universidad');

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista2);

    console.log("Servicio inicializado");
  }

}
