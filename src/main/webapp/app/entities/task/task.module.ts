import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSandboxSharedModule } from '../../shared';

import {
    TaskService,
    TaskPopupService,
    TaskComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskDialogComponent,
    TaskPopupComponent,
    TaskDeletePopupComponent,
    TaskDeleteDialogComponent,
    taskRoute,
    taskPopupRoute,
} from './';

let ENTITY_STATES = [
    ...taskRoute,
    ...taskPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSandboxSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        TaskComponent,
        TaskListComponent,
        TaskDetailComponent,
        TaskDialogComponent,
        TaskDeleteDialogComponent,
        TaskPopupComponent,
        TaskDeletePopupComponent,
    ],
    entryComponents: [
        TaskComponent,
        TaskListComponent,
        TaskDialogComponent,
        TaskPopupComponent,
        TaskDeleteDialogComponent,
        TaskDeletePopupComponent,
    ],
    providers: [
        TaskService,
        TaskPopupService,
    ],
    exports:      [ TaskListComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSandboxTaskModule {}
