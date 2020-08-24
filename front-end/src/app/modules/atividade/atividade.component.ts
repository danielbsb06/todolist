import { Component, OnInit } from '@angular/core';
import { AtividadeService } from './atividade.service';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html'
})
export class AtividadeComponent implements OnInit {

  private listaAtividades = [];

  constructor(protected atividadeService: AtividadeService) { }

  ngOnInit() {
    this.carregarLista();
  }

  carregarLista(){
    this.atividadeService.getAll().subscribe(atividades => {
      this.listaAtividades =  atividades;
    });
  }

  incluirEvent(param){
    this.atividadeService.create(param).subscribe(response => {
      this.carregarLista();
    });
  }

  excluirEvent(param){
    this.atividadeService.delete(param.id).subscribe(response => {
        this.carregarLista();
      }
    );
  }

}
