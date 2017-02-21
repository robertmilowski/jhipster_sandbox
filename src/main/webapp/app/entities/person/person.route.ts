import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { PersonComponent } from './person.component';
import { PersonDetailComponent } from './person-detail.component';
import { PersonPopupComponent } from './person-dialog.component';
import { PersonDeletePopupComponent } from './person-delete-dialog.component';

import { Principal } from '../../shared';


export const personRoute: Routes = [
  {
    path: 'person',
    component: PersonComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterSandboxApp.person.home.title'
    }
  }, {
    path: 'person/:id',
    component: PersonDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterSandboxApp.person.home.title'
    }
  }
];

export const personPopupRoute: Routes = [
  {
    path: 'person-new',
    component: PersonPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterSandboxApp.person.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'person/:id/edit',
    component: PersonPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterSandboxApp.person.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'person/:id/delete',
    component: PersonDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterSandboxApp.person.home.title'
    },
    outlet: 'popup'
  }
];
