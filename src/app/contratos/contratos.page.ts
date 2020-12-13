import { Component, OnInit } from '@angular/core';
import { Contrato } from '../shared/contrato';
import { ContratoService } from '../shared/contrato.service';
import { Cuidado } from '../shared/cuidado.enum';
import { Cuidadores } from '../shared/cuidadores';
import { CuidadoresService } from '../shared/cuidadores.service';
import { Periodo } from '../shared/periodo.enum';
import { Pet } from '../shared/pet';
import { PetService } from '../shared/pet.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.page.html',
  styleUrls: ['./contratos.page.scss'],
})
export class ContratosPage implements OnInit {
  pet             : Pet;
  pets            : any;
  cuidadores      : any;
  descricao       : string;
  contrato        : Contrato;
  cuidador        : Cuidadores;
  periodo         : any;
  codigo          : number;
  contratos       : Contrato[];

  constructor(private cuidadoresService: CuidadoresService, private petService: PetService, private contratoService:ContratoService) {
    this.contrato   = new Contrato();
    this.cuidadores = this.cuidadoresService.getCuidadores();
    this.pets       = this.petService.getPets();
    this.periodo    = Object.entries(Periodo).map(([valor, texto]) => ({ valor, texto }));
    this.codigo     = this.contratoService.getCodigo();
   }

  ngOnInit() {
    
  }

  editar(contrato:Contrato) {
    this.contrato = contrato;
  }

  salvar() {
    if(this.contrato.codigo === 0) {
      this.contrato.codigo = this.codigo;
    }
    this.contratoService.cadastrar(this.contrato);
    this.contrato = new Contrato();
    this.contratos = this.contratoService.listar();
  }
  
  excluir(contrato:Contrato):void {
    this.contratoService.excluir(contrato);
    this.contratos = this.contratoService.listar();
  }

  showPeriodo(param: string) {
    return (<any>Periodo)[param];
  }
}
