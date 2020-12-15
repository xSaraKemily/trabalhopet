import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Cuidado } from '../shared/cuidado.enum';
import { PetService } from '../shared/pet.service';
import { Sexo } from '../shared/sexo.enum';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario;
  telaTitulo: string;
  telaTipo: number;
  loginMsg: string;
  sexos:any[];
  private cadastroGroup: FormGroup;
  constructor(public toastController: ToastController,private petService: PetService, private formBuilder: FormBuilder, private router: Router) {


    this.cadastroGroup = this.formBuilder.group({
      usuarioC: ['', Validators.required],
      senhaC: ['', Validators.required],
      dataC: ['', Validators.required],
      fotoC: ['', Validators.required],
      sexoC: ['', Validators.required],
    });
    this.usuario = new Usuario(0,"", "", new Date(),  Sexo.M, "");
    this.sexos = Object.entries(Sexo).map(([valor, texto]) => ({ valor, texto }));
    this.telaTitulo = "Login";
    this.telaTipo = 0;
    this.loginMsg = "";
  }

  ngOnInit() {

  }



  showGenero(sexo: string) {
    return (<any>Sexo)[sexo];
  }
  cadastrar() {

    if (this.petService.verificaUsuario(this.usuario)) {
      this.testeUsuarioAviso(); 
    } else {
      this.usuario.codigo =  this.petService.getCodigoUsuario();
      this.petService.salvarUsuario(this.usuario);
      this.telaTitulo = "Login";
      this.telaTipo = 0;
      this.loginMsg = "";
      this.usuario = new Usuario(0,"", "", new Date(),  Sexo.M,  "");
    }

  }

  mudarTela(titulo, tipo): void {
    this.telaTitulo = titulo;
    this.telaTipo = tipo;
  }

  entrar() {
    if (this.petService.entrarUsuario(this.usuario)) {
      this.loginMsg = "";
      this.router.navigate(['/home']);
    } else {
      this.testeLoginAviso(); 
    }

  }


  async testeUsuarioAviso() {
    const toast = await this.toastController.create({
      message: '                    Esse usuario já existe!',
      duration: 1000,
      color: 'danger'
    });
    toast.present();
  }

  async testeLoginAviso() {
    const toast = await this.toastController.create({
      message: '       Login ou senha incorreta!',
      duration: 1000,
      color: 'danger'
    });
    toast.present();
  }
}
