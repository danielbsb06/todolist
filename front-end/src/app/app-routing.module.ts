import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
              path: '',
              loadChildren: './feature/home/home.module#HomeModule'
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
