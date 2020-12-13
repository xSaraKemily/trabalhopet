import { Sexo } from './sexo.enum';

export class Cuidadores {
    codigo     : number;
    nome       : string;
    contato    : string;
    sexo       : Sexo;
    foto       : string;
    valorHora  : number;


    constructor(codigo:number,nome:string,contato:string,sexo:Sexo,foto:string, valorHora:number) {
        this.codigo     = codigo;
        this.nome       = nome;
        this.contato    = contato;
        this.sexo       = sexo;
        this.foto       = foto;
        this.valorHora  = valorHora;
    }
}
