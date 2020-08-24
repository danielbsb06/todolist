import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atividade-form',
  templateUrl: './atividade-form.component.html',
  styleUrls: ['./atividade-form.component.css']
})
export class AtividadeFormComponent implements OnInit {

  private form: FormGroup;
  private listaAtividades = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.construirForm();
  }

  construirForm() {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required]
    });
  }

  incluir(){
    this.listaAtividades.push(this.form.value);
    this.form.reset();
  }

}
