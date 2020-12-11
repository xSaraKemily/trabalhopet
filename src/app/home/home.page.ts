import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PetService } from '../shared/pet.service';
import { Sexo } from '../shared/sexo.enum';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: Usuario;
  
  constructor(private petService: PetService,private router: Router,public toastController: ToastController) {
    this.getUsuarioLogado(); 
  }

  ngOnInit() {

  }

  showSexo(param: string) {
    return (<any>Sexo)[param];
  }

  getUsuarioLogado() {
    this.usuario = this.petService.getUsuarioLogado();
  }

  async excluirUsuario(usuario:Usuario)  {
    const toast = await this.toastController.create({
      message: 'Excluir conta?',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'trash',
          text: 'Sim',
          handler: () => {
            this.petService.excluirUsuario(usuario);
            this.router.navigate(['/login']);
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        }
      ]
    });
    toast.present();
  }

}


