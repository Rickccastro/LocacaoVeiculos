import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { VeiculoService } from "./services/veiculo.service";
import { Veiculo } from './components/model/Veiculo';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  veiculoService = inject(VeiculoService);
  router = inject(Router);

  onSubmit(veiculo: Veiculo) {
    this.veiculoService.cadastroVeiculo(veiculo);
      alert(`Veiculo ${veiculo.chassi} cadastrado com sucesso!`);
      this.router.navigateByUrl('/');
      
    // this.veiculoService.cadastroVeiculo(veiculo).subscribe((data) => {
    //   alert(`Veiculo ${data.title} cadastrado com sucesso!`);
    //   this.router.navigateByUrl('/');
    // });
  }
}
