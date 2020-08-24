import { Component, OnInit } from '@angular/core';
import { AtividadeService } from './atividade.service';
import { AtividadeModel } from 'src/app/shared/model/atividade.model';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html'
})
export class AtividadeComponent implements OnInit {

  private listaAtividades = [];
  private atividadeSelecionada: AtividadeModel;

  constructor(protected atividadeService: AtividadeService) { }

  ngOnInit() {
    this.carregarListaAtividade();
  }

  carregarListaAtividade(){
    this.atividadeService.getAll().subscribe(atividades => {
      this.listaAtividades =  atividades;
    });
  }

  salvarAtividadeEvent(param){
    this.atividadeService.create(param).subscribe(response => {
      this.atividadeSelecionada = null;
      this.carregarListaAtividade();
    });
  }

  excluirAtividadeEvent(param){
    this.atividadeService.delete(param.id).subscribe(response => {
        this.carregarListaAtividade();
      }
    );
  }

  selecionarAtividadeEvent(param){
    this.atividadeSelecionada = param;
  }

}
