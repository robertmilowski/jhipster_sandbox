import './vendor.ts';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterSandboxSharedModule, UserRouteAccessService } from './shared';
import { JhipsterSandboxHomeModule } from './home/home.module';
import { JhipsterSandboxAdminModule } from './admin/admin.module';
import { JhipsterSandboxAccountModule } from './account/account.module';
import { JhipsterSandboxEntityModule } from './entities/entity.module';

import { LayoutRoutingModule } from './layouts';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

import { JhipsterSandboxDashboardModule } from './dashboard/dashboard.module';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSandboxSharedModule,
        JhipsterSandboxHomeModule,
        JhipsterSandboxAdminModule,
        JhipsterSandboxAccountModule,
        JhipsterSandboxEntityModule,
        JhipsterSandboxDashboardModule,
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSandboxAppModule {}
