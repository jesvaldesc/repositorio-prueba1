import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  elementos: string[] = [];

  constructor() {}

  agregarElemento(elemento: string) {
    this.elementos.push(elemento);
  }

  obtenerElementos() {
    return this.elementos;
  }
  editarElemento(indice: number, nuevoElemento: string) {
    if (indice >= 0 && indice < this.elementos.length) {
      this.elementos[indice] = nuevoElemento;
    }
  }

  eliminarElemento(indice: number) {
    if (indice >= 0 && indice < this.elementos.length) {
      this.elementos.splice(indice, 1);
    }
  }
}
