import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Task } from './task.model';
import { DateUtils } from 'ng-jhipster';
@Injectable()
export class TaskService {

    private resourceUrl = 'api/tasks';

    constructor(private http: Http, private dateUtils: DateUtils) { }

    create(task: Task): Observable<Task> {
        let copy: Task = Object.assign({}, task);
        copy.startDate = this.dateUtils
            .convertLocalDateToServer(task.startDate);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(task: Task): Observable<Task> {
        let copy: Task = Object.assign({}, task);
        copy.startDate = this.dateUtils
            .convertLocalDateToServer(task.startDate);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Task> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            let jsonResponse = res.json();
            jsonResponse.startDate = this.dateUtils
                .convertLocalDateFromServer(jsonResponse.startDate);
            return jsonResponse;
        });
    }

    query(req?: any): Observable<Response> {
        console.log('query req=' + JSON.stringify(req));
        let options = this.createRequestOption(req);
        console.log('options=' + JSON.stringify(options));

        return this.http.get(this.resourceUrl, options)
            .map((res: any) => this.convertResponse(res))
        ;
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }


    private convertResponse(res: any): any {
        let jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            jsonResponse[i].startDate = this.dateUtils
                .convertLocalDateFromServer(jsonResponse[i].startDate);
        }
        res._body = jsonResponse;
        return res;
    }

    private createRequestOption(req?: any): BaseRequestOptions {

        console.log('createRequestOption query=' + req.query);
        let options: BaseRequestOptions = new BaseRequestOptions();
        if (req) {
            let params: URLSearchParams = new URLSearchParams();
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('query', req.query);
            
            console.log('createRequestOption options=' + req.query);
            options.search = params;
        }
        return options;
    }
}
