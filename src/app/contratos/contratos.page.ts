import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController, ToastController } from '@ionic/angular';
import { PetPopOverComponent } from '../pet-pop-over/pet-pop-over.component';
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
  params          : string;

  constructor(public toastController: ToastController,public popoverController: PopoverController,private dados:ActivatedRoute,private cuidadoresService: CuidadoresService, private petService: PetService, private contratoService:ContratoService) {
    this.contrato = new Contrato(0,'',null,null,null,null);
    this.cuidadores = this.cuidadoresService.getCuidadores();
    this.pets       = this.petService.getPets();
    this.periodo    = Object.entries(Periodo).map(([valor, texto]) => ({ valor, texto }));
    this.codigo     = this.contratoService.getCodigo();

    this.dados.params.subscribe(params => {
        let codigo = params['cuidador'];
        this.getCuidador(codigo);
      });
   }

  ngOnInit() {
    
  }

  async salvarAviso() {
    const toast = await this.toastController.create({
      message: '                              SALVO',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  editar(contrato:Contrato) {
    this.contrato = contrato;
  }

  
  getCuidador(codigo:number) {
    this.contrato.cuidador = this.cuidadoresService.getCuidador(codigo);
  }

  salvar() {
    if(this.contrato.codigo === 0) {
      this.contrato.codigo = this.contratoService.getCodigo();
    }
    this.contrato.contratante = this.petService.getUsuarioLogado();
    this.contratoService.cadastrar(this.contrato);
    this.salvarAviso();
    this.contrato = new Contrato(0,'',null,null,null,null);
    this.contratos = this.contratoService.listar();
  }
  
  excluir(contrato:Contrato):void {
    this.contratoService.excluir(contrato);
    this.contratos = this.contratoService.listar();
  }

  showPeriodo(param: string) {
    return (<any>Periodo)[param];
  }

  async petsContrato(ev: any,params : Pet[]) {
    const popover = await this.popoverController.create({
      component: PetPopOverComponent,
      componentProps: {
        pets: params
      },
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}


