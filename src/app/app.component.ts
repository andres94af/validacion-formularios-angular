import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,3}$')]],
      password1: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    });
  }

  campoInvalido(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

  passwordIguales(campoPass1: string, campoPass2: string) {
    const pass1 = this.form.get(campoPass1)?.value;
    const pass2 = this.form.get(campoPass2)?.value;
    if (pass1 !== pass2) {
      return this.form.get(campoPass2)?.setErrors({ noEsIgual: true });
    } else {
      return this.form.get(campoPass2)?.setErrors(null);
    }
  }

  formularioEsValido(): boolean {
    this.passwordIguales('password1', 'password2');
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) => control.markAllAsTouched());
      return false;
    }
    return true;
  }

  guardar() {
    if (!this.formularioEsValido()) {
      return console.log('Formulario invalido');
    }
    console.log('Guardando datos: ', this.form); //accion de guardar datos
  }

  limpiar() {
    this.form.reset();
  }
}
