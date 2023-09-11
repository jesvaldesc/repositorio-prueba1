import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { DataService } from '../../servicio/data.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.page.html',
})
export class AgregarPage {
  nuevoElemento: string = '';
  editando: boolean = false;
  indiceEditar: number | null = null;

  constructor(
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.nuevoElemento = state['elemento'];
      this.editando = true;
      this.indiceEditar = state['indice'];
    }
  }

  agregarElemento() {
    if (this.nuevoElemento.trim() !== '') {
      if (this.editando && this.indiceEditar !== null) {
        // Editar el elemento existente
        this.dataService.eliminarElemento(this.indiceEditar);

        // Agregar el nuevo elemento editado
        this.dataService.agregarElemento(this.nuevoElemento);
      } else {
        // Agregar un nuevo elemento
        this.dataService.agregarElemento(this.nuevoElemento);
      }

      // Redirigir de regreso a la página de listar
      this.router.navigate(['/home']);
    }
  }
}
