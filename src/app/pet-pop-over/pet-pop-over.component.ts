import { Component, Input, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { ContratoService } from '../shared/contrato.service';
import { Pet } from '../shared/pet';

@Component({
  selector: 'app-pet-pop-over',
  templateUrl: './pet-pop-over.component.html',
  styleUrls: ['./pet-pop-over.component.scss'],
})
export class PetPopOverComponent implements OnInit {
  params:Pet[];
  @Input() comments: any;
  constructor(private navParams: NavParams,private contratoService:ContratoService,private popCtrl: PopoverController) {
    this.params = contratoService.petsParams;
    
    this.comments = this.navParams.get('comments');
    console.log(this.comments);
   }

  ngOnInit() {
  }


}
