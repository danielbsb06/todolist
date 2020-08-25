import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/shared/service/base.service';
import { AtividadeModel } from 'src/app/shared/model/atividade.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AtividadeService extends BaseService<AtividadeModel> {

    protected constructor(protected injector: Injector) {
        super('atividade', injector);
    }

    concluir(id: number): Observable<AtividadeModel> {
        const url = `${environment.apiUrl}/${this.apiPath}/${id}/concluir`;
        return this.http.patch(url,{}).pipe(
            catchError(this.handleError)
        );
    }
}