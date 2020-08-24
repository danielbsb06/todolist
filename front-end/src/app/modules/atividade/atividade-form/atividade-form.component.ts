import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AtividadeService } from '../atividade.service';
import { AtividadeModel } from 'src/app/shared/model/atividade.model';

@Component({
  selector: 'app-atividade-form',
  templateUrl: './atividade-form.component.html',
  styleUrls: ['./atividade-form.component.css']
})
export class AtividadeFormComponent implements OnInit, OnChanges {
  @Output() salvarEvent = new EventEmitter()
  @Input() atividade: AtividadeModel;

  private labelBotao:string;
  private form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.construirForm();
    this.montarLabelBotao();
  }

  ngOnChanges() {
    this.construirForm();
    this.montarLabelBotao();
  }

  construirForm() {
    this.form = this.formBuilder.group({
      id: [null],
      titulo: ['', Validators.required]
    });

    if(this.atividade){
      this.form.patchValue(this.atividade);
    }
  }

  salvar(){
    this.salvarEvent.emit(this.form.value);
    this.form.reset();
  }

  montarLabelBotao(){
    this.labelBotao = this.atividade? 'Alterar atividade': 'Incluir atividade';
  }

}