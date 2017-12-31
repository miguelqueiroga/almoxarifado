import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AlmoxarifadoSharedModule, UserRouteAccessService } from './shared';
import { AlmoxarifadoAppRoutingModule} from './app-routing.module';
import { AlmoxarifadoHomeModule } from './home/home.module';
import { AlmoxarifadoAdminModule } from './admin/admin.module';
import { AlmoxarifadoAccountModule } from './account/account.module';
import { AlmoxarifadoEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        AlmoxarifadoAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        AlmoxarifadoSharedModule,
        AlmoxarifadoHomeModule,
        AlmoxarifadoAdminModule,
        AlmoxarifadoAccountModule,
        AlmoxarifadoEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class AlmoxarifadoAppModule {}
