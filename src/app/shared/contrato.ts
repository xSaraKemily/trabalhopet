import { Cuidadores } from './cuidadores';
import { Periodo } from './periodo.enum';
import { Pet } from './pet';
import { Usuario } from './usuario';


export class Contrato {
    codigo     : number;
    descricao  : string;
    cuidador   : Cuidadores;
    pet        : Pet[];
    periodo    : Periodo;
    contratante: Usuario;

    constructor(codigo:number,descricao:string,cuidador:Cuidadores, pet:Pet[], periodo:Periodo,contratante: Usuario) {
        this.codigo    = codigo;
        this.descricao = descricao;
        this.cuidador  = cuidador;
        this.pet       = pet;
        this.periodo   = periodo;
        this.contratante = contratante;
    }

}
