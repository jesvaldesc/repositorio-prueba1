import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../servicio/data.service';
@Component({
  selector: 'app-listar',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private router: Router, private dataService: DataService) {}

  ionViewDidEnter() {
    this.elementos = this.dataService.obtenerElementos();
  }

  elementos: string[] = [];

  irAAgregar() {
    this.router.navigate(['/agregar']);
  }
  editarElemento(index: number) {
    const elementoAEditar = this.elementos[index];
    this.router.navigate(['/agregar'], { state: { elemento: elementoAEditar, indice: index } });
  }

  eliminarElemento(index: number) {
    this.dataService.eliminarElemento(index);
    this.elementos = this.dataService.obtenerElementos();
  }
}
