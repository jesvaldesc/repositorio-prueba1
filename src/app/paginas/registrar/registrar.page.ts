import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: 'registrar.page.html',
})
export class RegistrarPage {
  usuario: string = ''
  password: string = ''

  async init() {
    const storage = await this.storage.create(); // Crea la base de datos
  }
  constructor(private storage: Storage, private navCtrl: NavController) { this.init();}
  registrarUsuario() {
    // Guardar los datos del usuario en el almacenamiento local
    this.storage.set('usuario', this.usuario);
    this.storage.set('password', this.password);
    console.log("Usuario creado")
    console.log(this.usuario, this.password)
    this.navCtrl.navigateForward('/login');

  }


}
