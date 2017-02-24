import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSandboxSharedModule } from '../shared';

import { DASHBOARD_ROUTE, DashboardComponent } from './';


@NgModule({
    imports: [
        JhipsterSandboxSharedModule,
        RouterModule.forRoot([ DASHBOARD_ROUTE ], { useHash: true })
    ],
    declarations: [
        DashboardComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSandboxDashboardModule {}
