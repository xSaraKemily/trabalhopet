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

  constructor(private cuidadoresService: CuidadoresService) { 
    this.cuidadores = this.cuidadoresService.getCuidadores();
  }

  ngOnInit() {
  }

  excluir (cuidador:Cuidadores) {
    this.cuidadores = this.cuidadoresService.excluir(cuidador);
    this.cuidadores = this.cuidadoresService.listar();
  }
}

