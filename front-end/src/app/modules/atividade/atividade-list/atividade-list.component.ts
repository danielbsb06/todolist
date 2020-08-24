import { Component, OnInit } from '@angular/core';
import { AtividadeService } from '../atividade.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-atividade-list',
  templateUrl: './atividade-list.component.html',
  styleUrls:['./atividade-list.component.css']
})
export class AtividadeListComponent implements OnInit {

  private listaAtividades = [];

  constructor(protected atividadeService: AtividadeService,
              protected confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.atividadeService.getAll().subscribe(atividades => {
      this.listaAtividades =  atividades;
    });
  }



  private excluir = (param) => {
    this.atividadeService.delete(param.id).subscribe();
  }


  abrirModalConfirmacao(param, funcao, mensagem: string, funcaoReject?) {
    this.confirmationService.confirm({
        message: mensagem,
        acceptLabel: "Sim",
        rejectLabel: "Não",
        accept: () => {
            setTimeout(() => {
               funcao(param);
            }, 1000);
        },
        reject: () => {
            setTimeout(() => {
                funcaoReject(param);
            }, 1000);
      },
    });
  }
}
