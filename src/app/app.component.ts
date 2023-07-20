import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form:FormGroup;

  constructor(private fb:FormBuilder){
    this.crearFormulario();
  }

  crearFormulario(){
    this.form = this.fb.group({
      nombre:[''],
      apellido:[''],
      correo:[''],
      password1:[''],
      password2:['']
    })
  }

  guardar(){
    console.log(this.form);
  }

  limpiar(){
    this.form.reset();
  }
  
}
