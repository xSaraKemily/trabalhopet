import { Sexo } from './sexo.enum';

export class Usuario {
    codigo:number;
    usuario:string;
    senha:string;
    nascimento:Date  | string;
    sexo:Sexo;
    foto:string;


    constructor(codigo:number,usuario:string,senha:string,nascimento:Date,sexo:Sexo,foto:string) {
        this.codigo = codigo;
        this.usuario = usuario;
        this.senha = senha;
        this.nascimento = nascimento;
        this.sexo = sexo;
        this.foto = foto;
    }
}
