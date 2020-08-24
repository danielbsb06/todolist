import {ModuleWithProviders, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {LOCALE_ID} from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,    
    ],
    declarations: [
    ],
    providers: [
        {provide: LOCALE_ID,useValue: "pt-BR"}
    ],
    exports: [
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