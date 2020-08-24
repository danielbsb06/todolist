import { Component, OnInit } from '@angular/core';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-atividade-list',
  templateUrl: './atividade-list.component.html',
  styleUrls:['./atividade-list.component.css']
})
export class AtividadeListComponent implements OnInit {

  private listaAtividades = [];

  constructor(protected atividadeService: AtividadeService) { }

  ngOnInit() {
    this.atividadeService.getAll().subscribe(atividades => {
      this.listaAtividades =  atividades;
    });
  }

  excluir(atividade){
    this.listaAtividades.splice(this.listaAtividades.indexOf(atividade),1);
  }
}
