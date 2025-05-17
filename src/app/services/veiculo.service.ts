import { Injectable } from '@angular/core';
import { Veiculo } from '../components/model/Veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  listaVeiculos: Veiculo[] = [];  
  cadastroVeiculo(veiculo: Veiculo) {
    this.listaVeiculos.push(veiculo);
    console.log(this.listaVeiculos);
    return this.listaVeiculos;
  }
}
