import { Injectable } from '@angular/core';
import { Locacao } from '../components/model/Locacao';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {
  listaLocacao: Locacao[] = [];  
  cadastrolocacaoVeiculo(locacao: Locacao) {
    this.listaLocacao.push(locacao);
    console.log(this.listaLocacao);
    return this.listaLocacao;
  }
}
