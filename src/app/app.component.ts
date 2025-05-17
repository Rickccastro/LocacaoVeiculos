import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { LocacaoService } from "./services/locacao.service";
import { Locacao } from './components/model/Locacao';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  locacaoService = inject(LocacaoService);
  router = inject(Router);

  onSubmit(locacao: Locacao) {
    this.locacaoService.cadastrolocacaoVeiculo(locacao);
      alert(`Locacao cadastrada com sucesso!`);
      this.router.navigateByUrl('/');
      
    // this.veiculoService.cadastroVeiculo(veiculo).subscribe((data) => {
    //   alert(`Veiculo ${data.title} cadastrado com sucesso!`);
    //   this.router.navigateByUrl('/');
    // });
  }
}
