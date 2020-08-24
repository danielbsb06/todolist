import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-atividade-list',
  templateUrl: './atividade-list.component.html',
  styleUrls:['./atividade-list.component.css']
})
export class AtividadeListComponent implements OnInit {

  private listaAtividades = [];

  constructor() { }

  ngOnInit() {
  }

  excluir(atividade){
    this.listaAtividades.splice(this.listaAtividades.indexOf(atividade),1);
  }
}
