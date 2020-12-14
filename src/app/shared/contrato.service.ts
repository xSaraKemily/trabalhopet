import { Injectable } from '@angular/core';
import { Contrato } from './contrato';
import { CuidadoresService } from './cuidadores.service';
import { Pet } from './pet';
import { PetService } from './pet.service';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
 private contratos : Contrato[]; 

  constructor(private petService:PetService,private cuidadorService:CuidadoresService) { 
    this.contratos = new Array;
  }

  getCodigo() {
    return this.contratos.length + 1;
  }

  cadastrar(contrato: Contrato):void {
    const indice = this.contratos.findIndex(p => p.codigo === contrato.codigo);
    if(indice === -1) {
      this.contratos = [...this.contratos, contrato];
    } else {
      this.contratos[indice] = {...contrato};
    }
  }

  listar() {
    return this.contratos.filter(obj => obj.contratante.codigo == this.petService.getUsuarioLogado().codigo);;
  }

  excluir(contrato: Contrato):void {
    this.contratos = this.contratos.filter(l => l.codigo !== contrato.codigo);
  }

  getCuidador(codigo:number) {
    return this.cuidadorService.getCuidador(codigo);
  }
}
