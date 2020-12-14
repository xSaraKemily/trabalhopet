import { Injectable } from '@angular/core';
import { Cuidado } from './cuidado.enum';
import { Pet } from './pet';
import { Porte } from './porte.enum';
import { Raca } from './raca.enum';
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
    }
  }

  entrarUsuario(usuario:Usuario):boolean {
    this.usuarioLogado = this.usuarios.filter(obj => obj.usuario == usuario.usuario && obj.senha == usuario.senha)[0];
    if(this.usuarioLogado != undefined) {
      return true;
    }else{
      return false;
    }
  }

  verificaUsuario(usuario:Usuario):boolean {
    const indice = this.usuarios.findIndex(obj => obj.codigo === usuario.codigo);
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
    console.log(this.usuarioLogado.codigo);
    return  this.pets.filter(obj => obj.dono.codigo == this.usuarioLogado.codigo);
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
