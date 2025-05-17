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
import { Locacao } from '../model/Locacao';

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
  @Input() locacao: Locacao | null = null;
  @Output() send = new EventEmitter<Locacao>();
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      finalidade: new FormControl<string>(this.locacao?.finalidade ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      localidade: new FormControl<string>(this.locacao?.localidade ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
      tempoLocacao: new FormControl<string>(this.locacao?.tempoLocacao ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      placaVeiculo: new FormControl<string>(this.locacao?.placaVeiculo ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  onSubmit() {
    const locacao = this.form.value as Locacao;
    this.send.emit(locacao);
  }

  getControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;
  }
}
