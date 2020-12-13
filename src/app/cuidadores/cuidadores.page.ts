import { Component, OnInit } from '@angular/core';
import { Cuidadores } from '../shared/cuidadores';
import { CuidadoresService } from '../shared/cuidadores.service';
import { Periodo } from '../shared/periodo.enum';
import { Sexo } from '../shared/sexo.enum';

@Component({
  selector: 'app-cuidadores',
  templateUrl: './cuidadores.page.html',
  styleUrls: ['./cuidadores.page.scss'],
})
export class CuidadoresPage implements OnInit {

  cuidadores: any;
  filtro:number  | string;

  constructor(private cuidadoresService: CuidadoresService) { 
    this.cuidadores = this.cuidadoresService.getCuidadores();
    this.filtro = "0";
  }

  ngOnInit() {
  }

  excluir (cuidador:Cuidadores) {
    this.cuidadores = this.cuidadoresService.excluir(cuidador);
    this.cuidadores = this.cuidadoresService.listar();
  }

  filtrarValor():void{

    if(this.filtro == 0){
      this.cuidadores = this.cuidadoresService.getCuidadores();
    }

  if(this.filtro == 1) {
    this.cuidadores = this.cuidadoresService.getCuidadores().filter(obj => obj.valorHora >= 0 && obj.valorHora < 25);
  }

  if(this.filtro == 2) {
    this.cuidadores = this.cuidadoresService.getCuidadores().filter(obj => obj.valorHora >= 25 && obj.valorHora < 50);
  }

  if(this.filtro == 3) {
    this.cuidadores = this.cuidadoresService.getCuidadores().filter(obj => obj.valorHora >= 50 && obj.valorHora < 100);
  }

  if(this.filtro == 4) {
    this.cuidadores = this.cuidadoresService.getCuidadores().filter(obj => obj.valorHora > 100);
  }
  
    
  }
}

