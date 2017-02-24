import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSandboxSharedModule } from '../shared';

import { DASHBOARD_ROUTE, DashboardComponent } from './';

import { JhipsterSandboxPersonModule } from '../entities/person/person.module';
import { PersonComponent } from '../entities/person';


@NgModule({
    imports: [
        JhipsterSandboxSharedModule,
        JhipsterSandboxPersonModule,
        RouterModule.forRoot([ DASHBOARD_ROUTE ], { useHash: true })
    ],
    declarations: [
        DashboardComponent,
//        PersonComponent,
    ],
    entryComponents: [
        PersonComponent,
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSandboxDashboardModule {}
