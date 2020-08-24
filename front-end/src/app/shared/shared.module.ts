import {ModuleWithProviders, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule, 
        CommonModule,
        ReactiveFormsModule,    
    ],
    declarations: [
    ],
    providers: [
        {provide: LOCALE_ID,useValue: "pt-BR"}
    ],
    exports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
            ]
        };
    }
}