import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-atividade-form',
  templateUrl: './atividade-form.component.html',
  styleUrls: ['./atividade-form.component.css']
})
export class AtividadeFormComponent implements OnInit {
  @Output() incluirEvent = new EventEmitter()

  private form: FormGroup;

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
    this.incluirEvent.emit(this.form.value);
    this.form.reset();
  }

}