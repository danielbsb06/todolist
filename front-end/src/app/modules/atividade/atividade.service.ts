import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/shared/service/base.service';
import { AtividadeModel } from 'src/app/shared/model/atividade.model';

@Injectable({ providedIn: 'root' })
export class AtividadeService extends BaseService<AtividadeModel> {

    protected constructor(protected injector: Injector) {
        super('atividade', injector);
    }
}