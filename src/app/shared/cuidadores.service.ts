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
        foto      :  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/463966fd-512d-46b9-8ea7-527487401c91/d2uidcv-e7162f65-0246-444c-89c4-6484b8e5358a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDYzOTY2ZmQtNTEyZC00NmI5LThlYTctNTI3NDg3NDAxYzkxXC9kMnVpZGN2LWU3MTYyZjY1LTAyNDYtNDQ0Yy04OWM0LTY0ODRiOGU1MzU4YS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vyFpAR3M3Xt2QxhSV9Z8yY29r-QCU1Jyip1uFMn1WBE',
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

  getCuidador(codigo:number) {
    return this.cuidadores.filter(obj => obj.codigo == codigo)[0];
  }

  excluir(cuidadores: Cuidadores):void {
    this.cuidadores = this.cuidadores.filter(l => l.nome !== cuidadores.nome);
  }
}