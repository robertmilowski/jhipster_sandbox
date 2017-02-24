import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSandboxSharedModule } from '../shared';

import { DASHBOARD_ROUTE, DashboardComponent } from './';

import { JhipsterSandboxPersonModule } from '../entities/person/person.module';
import { PersonComponent } from '../entities/person';

import { JhipsterSandboxTaskModule } from '../entities/task/task.module';
import { TaskListComponent } from '../entities/task';

@NgModule({
    imports: [
        JhipsterSandboxSharedModule,
        JhipsterSandboxTaskModule,
        JhipsterSandboxPersonModule,
        RouterModule.forRoot([ DASHBOARD_ROUTE ], { useHash: true })
    ],
    declarations: [
        DashboardComponent,
    ],
    entryComponents: [
        PersonComponent,
        TaskListComponent,
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSandboxDashboardModule {}
