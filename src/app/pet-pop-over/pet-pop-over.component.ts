import { Component, Input, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { ContratoService } from '../shared/contrato.service';
import { Cuidado } from '../shared/cuidado.enum';
import { Pet } from '../shared/pet';
import { Porte } from '../shared/porte.enum';
import { Raca } from '../shared/raca.enum';

@Component({
  selector: 'app-pet-pop-over',
  templateUrl: './pet-pop-over.component.html',
  styleUrls: ['./pet-pop-over.component.scss'],
})
export class PetPopOverComponent implements OnInit {
  @Input() pets: Pet[];
  constructor(private navParams: NavParams,private popCtrl: PopoverController) {
    this.pets = this.navParams.get('pets');
    console.log(this.pets);
   }

  ngOnInit() {
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

}
