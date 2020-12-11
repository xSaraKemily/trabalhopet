import { Cuidado } from './cuidado.enum';
import { Porte } from './porte.enum';
import { Raca } from './raca.enum';
import { Usuario } from './usuario';

export class Pet {
    codigo:number;
    nome:string;
    porte:Porte;
    cuidado:Cuidado;
    raca:Raca;
    foto:string;
    descricao:string;
    dono:Usuario;

    constructor(codigo:number,nome:string,porte:Porte,cuidado:Cuidado,raca:Raca,foto:string,descricao:string,dono:Usuario) {
        this.codigo = codigo;
        this.nome = nome;
        this.porte = porte;
        this.cuidado = cuidado;
        this.raca = raca;
        this.foto = foto;
        this.descricao = descricao;
        this.dono = dono;
    }
}
