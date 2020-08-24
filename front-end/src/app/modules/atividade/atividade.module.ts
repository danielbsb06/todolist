import { NgModule } from '@angular/core';
import { AtividadeListComponent } from './atividade-list/atividade-list.component';
import { AtividadeComponent } from './atividade.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AtividadeComponent,
    AtividadeListComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    AtividadeComponent
  ]
})
export class AtividadeModule { }
