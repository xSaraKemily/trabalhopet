import { Injectable } from '@angular/core';
import { Contrato } from './contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
 private contratos : Contrato[]; 

  constructor() { 
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
    return this.contratos;
  }

  excluir(contrato: Contrato):void {
    this.contratos = this.contratos.filter(l => l.codigo !== contrato.codigo);
  }
}
