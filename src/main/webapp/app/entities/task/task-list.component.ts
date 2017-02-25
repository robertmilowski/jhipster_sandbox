import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager, ParseLinks, PaginationUtil, JhiLanguageService, AlertService } from 'ng-jhipster';

import { Task } from './task.model';
import { TaskService } from './task.service';
import { ITEMS_PER_PAGE, Principal } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit, OnDestroy {
tasks: Task[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private taskService: TaskService,
        private alertService: AlertService,
        private eventManager: EventManager,
        private principal: Principal
    ) {
//        this.jhiLanguageService.setLocations(['task']);
        this.jhiLanguageService.addLocation('task');

    }

    loadAll() {
        console.log('loadAll');
        this.taskService.query({

            page: 1,
            size: 2,
            query: 'id=3'
        }).subscribe(
            (res: Response) => {
                this.tasks = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
    }


    loadTop5() {
        console.log('loadTop5');
        this.taskService.query({

            page: 1,
            size: 2,
            query: 'select top 2 t from task t'
        }
            ).subscribe(
            (res: Response) => {
                this.tasks = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
    }


    ngOnInit() {
        console.log('  task-list:  ngOnInit() ');
//        this.loadAll();
        this.loadTop5();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInTasks();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId (index: number, item: Task) {
        return item.id;
    }



    registerChangeInTasks() {
        this.eventSubscriber = this.eventManager.subscribe('taskListModification', (response) => this.loadAll());
    }


    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}
