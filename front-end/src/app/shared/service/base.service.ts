import { environment } from './../../../environments/environment';
import { Injector } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseModel } from '../model/abstract/base.model';


export abstract class BaseService<T extends BaseModel> {

    protected http: HttpClient;

    protected constructor(
        protected apiPath: string,
        protected injector: Injector) {
        this.http = injector.get(HttpClient);
    }

    getAll(): Observable<T[]> {
        return this.http.get(`${environment.apiUrl}/${this.apiPath}`).pipe(
            catchError(this.handleError)
        );
    }

    getById(id: any): Observable<T> {
        const url = `${environment.apiUrl}/${this.apiPath}/${id}`;
        return this.http.get(url).pipe(
            catchError(this.handleError)
        );
    }

    create(resource: T): Observable<T> {
        return this.http.post(`${environment.apiUrl}/${this.apiPath}`, resource).pipe(
            catchError(this.handleError)
        );
    }

    update(resource: T): Observable<T> {
        const url = `${environment.apiUrl}/${this.apiPath}/${resource.id}`;
        return this.http.put(url, resource).pipe(
            map(() => resource),
            catchError(this.handleError)
        );
    }

    delete(id: any): Observable<any> {
        const url = `${environment.apiUrl}/${this.apiPath}/${id}`;
        return this.http.delete(url).pipe(
            map(() => null),
            catchError(this.handleError)
        );
    }

    getApiPath() {
        return this.apiPath;
    }

    protected handleError(error: any): Observable<any> {
        return throwError(error);
    }
}
