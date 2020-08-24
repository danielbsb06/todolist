import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-atividade-form',
  templateUrl: './atividade-form.component.html',
  styleUrls: ['./atividade-form.component.css']
})
export class AtividadeFormComponent implements OnInit {

  private form: FormGroup;
  private listaAtividades = [];

  constructor(private formBuilder: FormBuilder,
              protected atividadeService: AtividadeService) { }

  ngOnInit() {
    this.construirForm();
  }

  construirForm() {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required]
    });
  }

  incluir(){
    //this.listaAtividades.push(this.form.value);
    this.atividadeService.create(this.form.value).subscribe(response => {
      console.log(response);
      this.form.reset();
    });
  }

}
