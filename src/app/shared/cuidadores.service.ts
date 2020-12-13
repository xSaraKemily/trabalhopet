import { Injectable } from '@angular/core';
import { Cuidadores } from './cuidadores';
import { Sexo } from './sexo.enum';

@Injectable({
  providedIn: 'root'
})
export class CuidadoresService {

 private cuidadores:Cuidadores[];

  constructor() { 
    this.cuidadores = [
      {
        codigo    :  1,
        nome      :  'Sara',
        contato   :  '(48) 990878927' ,
        sexo      :  Sexo.F,
        foto      :  'https://vgraphs.com/images/agents/reyna-avatar.jpg',
        valorHora :  24.00,
      },
      {
        codigo    :  2,
        nome      :  'Brayan',
        contato   :  '(48) 990938475',
        sexo      :  Sexo.M,
        foto      :  'https://vgraphs.com/images/agents/brimstone-avatar.jpg',
        valorHora :  30.00,
      },
      {
        codigo    :  3,
        nome      :  'Muriel',
        contato   :  '(48) 78854125015',
        sexo      :  Sexo.M,
        foto      :  'https://files.cults3d.com/uploaders/14684840/illustration-file/388d5e1a-7c44-4172-a0c9-0a34c088be8c/sova-avatar.jpg',
        valorHora :  15.00,
      }
    ]
  }

  getCuidadores() {
    return this.cuidadores;
  }

  listar() {
    return this.cuidadores;
  }

  excluir(cuidadores: Cuidadores):void {
    this.cuidadores = this.cuidadores.filter(l => l.nome !== cuidadores.nome);
  }
}