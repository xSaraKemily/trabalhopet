import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { PetService } from '../shared/pet.service';
import { Sexo } from '../shared/sexo.enum';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {
  usuario: Usuario;
  sexos:any[];
  constructor(private petService: PetService,public toastController: ToastController) {
    this.getUsuarioLogado();
    this.sexos = Object.entries(Sexo).map(([valor, texto]) => ({ valor, texto }));
   }

  ngOnInit() {
  }

  salvar() {
    this.petService.salvarUsuario(this.usuario);
    this.petService.getUsuarioLogado();
    this.salvarAviso();
  }
  getUsuarioLogado() {
    this.usuario = this.petService.getUsuarioLogado();
    if(this.usuario.nascimento instanceof Date) {
      this.usuario.nascimento = this.usuario.nascimento.toISOString();
    }
  }

  async salvarAviso() {
    const toast = await this.toastController.create({
      message: '                              SALVO',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
