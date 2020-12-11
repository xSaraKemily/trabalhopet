import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { Sexo } from './sexo.enum';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class PetService {
 private usuarioLogado:Usuario;
 private usuarios:Usuario[];

 
 private pets:Pet[];

  constructor() { 
    this.usuarios = new Array;
    this.pets = new Array;
  }


//Usuario==============================
  getUsuarioLogado() {
    return this.usuarioLogado;
  }

  getUsuarios() {
    return this.usuarios;
  }

  excluirUsuario(usuario: Usuario) {
    this.usuarios = this.usuarios.filter(u => u.codigo !== usuario.codigo);
    this.pets = this.pets.filter(p => p.dono.codigo !== usuario.codigo);
    this.usuarioLogado = null;
  }

  salvarUsuario(usuario: Usuario):void {
    const indice = this.usuarios.findIndex(u => u.codigo === usuario.codigo);
    if(indice === -1) {
      this.usuarios = [...this.usuarios, usuario];
    } else {
      this.usuarios[indice] = {...usuario};
      console.log(indice);
    }
  }

  entrarUsuario(usuario:Usuario):boolean {
    this.usuarioLogado = this.usuarios.filter(obj => obj.usuario == usuario.usuario && obj.senha == usuario.senha)[0];
    console.log(this.usuarioLogado);
    if(this.usuarioLogado != undefined) {
      return true;
    }else{
      return false;
    }
  }

  verificaUsuario(usuario:Usuario):boolean {
    const indice = this.usuarios.findIndex(obj => obj.codigo === usuario.codigo);
    console.log(indice);
    if(indice === -1) {
      return false;
    }else{
      return true;
    }
  }
  getCodigoUsuario() {
    return this.usuarios.length + 1;
  }

  //Pets==============================

  getCodigoPet() {
    return this.pets.length + 1;
  }

  getPets() {
    return this.pets;
  }

  excluirPet(pet: Pet):void {
    this.pets = this.pets.filter(l => l.nome !== pet.nome);
  }

  cadastrarPet(pet: Pet):void {
    const indice = this.pets.findIndex(p => p.codigo === pet.codigo);
    if(indice === -1) {
      this.pets = [...this.pets, pet];
    } else {
      this.pets[indice] = {...pet};
    }
    
  }
}
