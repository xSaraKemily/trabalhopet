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
    this.usuarioLogado = new Usuario(1,'teste',"123",new Date(),Sexo.O,"data:image/jpeg;base64,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");
 
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
