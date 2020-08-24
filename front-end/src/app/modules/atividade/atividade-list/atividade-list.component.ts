import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AtividadeService } from '../atividade.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-atividade-list',
  templateUrl: './atividade-list.component.html',
  styleUrls:['./atividade-list.component.css']
})
export class AtividadeListComponent implements OnInit {

  @Input() listaAtividades = [];
  @Output() excluirEvent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  private excluir = (param) => {
    this.excluirEvent.emit(param);
  }
}
