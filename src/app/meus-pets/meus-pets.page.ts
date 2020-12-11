import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Cuidado } from '../shared/cuidado.enum';
import { Pet } from '../shared/pet';
import { PetService } from '../shared/pet.service';
import { Porte } from '../shared/porte.enum';
import { Raca } from '../shared/raca.enum';

@Component({
  selector: 'app-meus-pets',
  templateUrl: './meus-pets.page.html',
  styleUrls: ['./meus-pets.page.scss'],
})
export class MeusPetsPage implements OnInit {
  cuidados:any[];
  portes:any[];
  racas:any[];
  pet:Pet;
  pets:Pet[];
  constructor(private petService: PetService,public toastController: ToastController) { 
    this.pet = new Pet(0,"",Porte.M,Cuidado.M,Raca.DB,"","",this.petService.getUsuarioLogado());
    this.pets = new Array;
    this.cuidados = Object.entries(Cuidado).map(([valor, texto]) => ({ valor, texto }));
    this.portes = Object.entries(Porte).map(([valor, texto]) => ({ valor, texto }));
    this.racas = Object.entries(Raca).map(([valor, texto]) => ({ valor, texto }));
    this.getPets();
  }

  ngOnInit() {
  }


  salvar() {
      if(this.pet.codigo === 0) {
        this.pet.codigo = this.petService.getCodigoPet();
      }
      this.petService.cadastrarPet(this.pet);
      this.pet = new Pet(0,"",Porte.M,Cuidado.M,Raca.DB,"","",this.petService.getUsuarioLogado());
      this.getPets();
      this.salvarAviso();
  }


  getPets() {
    this.pets = this.petService.getPets();
    console.log(this.pets);
  }

  editar(pet:Pet) {
    this.pet = pet;
  }

excluir(pet:Pet):void {
  this.petService.excluirPet(pet);
  this.getPets();
}

showRaca(param: string) {
  return (<any>Raca)[param];
}

showCuidado(param: string) {
  return (<any>Cuidado)[param];
}

showPorte(param: string) {
  return (<any>Porte)[param];
}

async salvarAviso() {
    const toast = await this.toastController.create({
      message: '                              SALVO',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
