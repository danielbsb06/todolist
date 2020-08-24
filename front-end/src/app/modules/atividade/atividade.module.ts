import { NgModule } from '@angular/core';
import { AtividadeListComponent } from './atividade-list/atividade-list.component';
import { AtividadeComponent } from './atividade.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { AtividadeFormComponent } from './atividade-form/atividade-form.component';


@NgModule({
  declarations: [
    AtividadeComponent,
    AtividadeListComponent,
    AtividadeFormComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    AtividadeComponent
  ]
})
export class AtividadeModule { }
