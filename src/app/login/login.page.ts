import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private petService: PetService, private formBuilder: FormBuilder, private router: Router) {


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
    console.log(this.usuario.sexo);
    if (this.petService.verificaUsuario(this.usuario)) {
      this.loginMsg = "Esse usuario já existe!";
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
      this.loginMsg = "Login ou senha incorreta!";
    }

  }
}
