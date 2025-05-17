import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputFormComponent } from '../input-form/input-form.component';
import { Veiculo } from '../model/Veiculo';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    InputFormComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Input() veiculo: Veiculo | null = null;
  @Output() send = new EventEmitter<Veiculo>();
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      chassi: new FormControl<string>(this.veiculo?.chassi ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      cor: new FormControl<string>(this.veiculo?.cor ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
      numeroPortas: new FormControl<string>(this.veiculo?.numeroPortas ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      placa: new FormControl<string>(this.veiculo?.placa ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      quilometragem: new FormControl<number>(this.veiculo?.quilometragem ?? 0, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      renavam: new FormControl<number>(this.veiculo?.renavam ?? 0, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      tipoCombustivel: new FormControl<number>(this.veiculo?.tipoCombustivel ?? 0, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      valorLocacao: new FormControl<string>(this.veiculo?.valorLocacao ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  onSubmit() {
    const veiculo = this.form.value as Veiculo;
    this.send.emit(veiculo);
  }

  getControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }
}
