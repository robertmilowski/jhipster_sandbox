import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager, ParseLinks, PaginationUtil, JhiLanguageService, AlertService } from 'ng-jhipster';

import { Person } from './person.model';
import { PersonService } from './person.service';
import { ITEMS_PER_PAGE, Principal } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-person',
    templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit, OnDestroy {
people: Person[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private personService: PersonService,
        private alertService: AlertService,
        private eventManager: EventManager,
        private principal: Principal
    ) {
//        this.jhiLanguageService.setLocations(['person']);
        this.jhiLanguageService.addLocation('person');
    }

    loadAll() {
        this.personService.query().subscribe(
            (res: Response) => {
                this.people = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInPeople();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId (index: number, item: Person) {
        return item.id;
    }



    registerChangeInPeople() {
        this.eventSubscriber = this.eventManager.subscribe('personListModification', (response) => this.loadAll());
    }


    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}
