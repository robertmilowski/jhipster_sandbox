import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Task } from './task.model';
import { TaskService } from './task.service';
@Injectable()
export class TaskPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private taskService: TaskService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.taskService.find(id).subscribe(task => {
                if (task.startDate) {
                    task.startDate = {
                        year: task.startDate.getFullYear(),
                        month: task.startDate.getMonth() + 1,
                        day: task.startDate.getDate()
                    };
                }
                this.taskModalRef(component, task);
            });
        } else {
            return this.taskModalRef(component, new Task());
        }
    }

    taskModalRef(component: Component, task: Task): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.task = task;
        modalRef.result.then(result => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
