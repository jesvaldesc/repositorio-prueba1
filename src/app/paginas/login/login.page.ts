import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html'
})

export class LoginPage  {
  usuario: string = '';
  password: string = '';

  constructor(private storage: Storage, private navCtrl: NavController) {}

  iniciarSesion() {
    // Obtener los datos del usuario almacenados localmente
    this.storage.get('usuario').then((storedUsuario) => {
      this.storage.get('password').then((storedPassword) => {
        console.log('Usuario almacenado:', storedUsuario);
      console.log('Contraseña almacenada:', storedPassword);
        if (this.usuario === storedUsuario && this.password === storedPassword) {
          this.navCtrl.navigateForward('/home');
          console.log('Inicio de sesión exitoso');
        } else {
          // Usuario o contraseña incorrectos
          console.log('Usuario o contraseña incorrectos');
        }
      });
    });
  }

}
