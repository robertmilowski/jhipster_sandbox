import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import {
    JhipsterSandboxSharedLibsModule,
    JhipsterSandboxSharedCommonModule,
    CSRFService,
    AuthService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    HasAnyAuthorityDirective,
    JhiLoginModalComponent
} from './';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
    imports: [
        JhipsterSandboxSharedLibsModule,
        JhipsterSandboxSharedCommonModule,
        DataTablesModule,
    ],
    declarations: [
        JhiLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
        CookieService,
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        AuthService,
        UserService,
        DatePipe
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        JhipsterSandboxSharedCommonModule,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe,
        DataTablesModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class JhipsterSandboxSharedModule {}
