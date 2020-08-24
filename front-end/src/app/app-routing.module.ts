import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './modules/todo/list/list.component';



const routes: Routes = [
  {
      path: '',
      component: ListComponent,
      children: [
          {
              path: '',
              loadChildren: './modules/todo/todo.module#TodoModule'
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
