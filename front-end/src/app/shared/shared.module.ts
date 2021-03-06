import {ModuleWithProviders, NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
    imports: [
        BrowserModule, 
        CommonModule,
        ReactiveFormsModule,  
        FormsModule,  
        InputTextModule,
        FieldsetModule,
        ButtonModule,
        TableModule
    ],
    declarations: [
    ],
    providers: [
        {provide: LOCALE_ID,useValue: "pt-BR"},
        MessageService,
        ConfirmationService

    ],
    exports: [
        BrowserModule, 
        CommonModule,
        ReactiveFormsModule,  
        FormsModule,  
        InputTextModule,
        FieldsetModule,
        ButtonModule,
        TableModule
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