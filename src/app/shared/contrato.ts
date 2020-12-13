import { Cuidadores } from './cuidadores';
import { Periodo } from './periodo.enum';
import { Pet } from './pet';


export class Contrato {
    codigo     : number;
    descricao  : string;
    cuidador   : Cuidadores;
    pet        : Pet;
    periodo    : Periodo;

    constructor(codigo:number,descricao:string,cuidador:Cuidadores, pet:Pet, periodo:Periodo) {
        this.codigo    = codigo;
        this.descricao = descricao;
        this.cuidador  = cuidador;
        this.pet       = pet;
        this.periodo   = periodo;
    }

}
