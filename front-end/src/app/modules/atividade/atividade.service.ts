import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/shared/service/base.service';
import { BaseModel } from 'src/app/shared/model/base.model';

@Injectable({ providedIn: 'root' })
export class AtividadeService extends BaseService<BaseModel> {

    protected constructor(protected injector: Injector) {
        super('atividade', injector);
    }
}