import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, CommonModule } from '@angular/common';
import localeBr from '@angular/common/locales/pt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AtividadeComponent } from './modules/atividade/atividade.component';
import { AtividadeModule } from './modules/atividade/atividade.module';

registerLocaleData(localeBr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    AtividadeModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
