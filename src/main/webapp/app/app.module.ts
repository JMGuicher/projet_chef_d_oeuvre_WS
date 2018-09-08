import './vendor.ts';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2Webstorage} from 'ngx-webstorage';
import {RouterModule, Routes} from '@angular/router';

import {AppSharedModule, UserRouteAccessService} from './shared';
import {AppAppRoutingModule} from './app-routing.module';
import {AppHomeModule} from './home/home.module';
import {AppAdminModule} from './admin/admin.module';
import {AppAccountModule} from './account/account.module';
import {AppEntityModule} from './entities/entity.module';
import {customHttpProvider} from './blocks/interceptor/http.provider';
import {PaginationConfig} from './blocks/config/uib-pagination.config';
import {AppJobModule} from './job/job.module';
import {ContributorService} from './shared/contributor/contributor.service';
import {JobService} from './shared/job/job.service';
import {NewContributorComponent} from './new-contributor/new-contributor.component';


import {
    ActiveMenuDirective,
    ErrorComponent,
    FooterComponent,
    JhiMainComponent,
    NavbarComponent,
    PageRibbonComponent,
    ProfileService,
} from './layouts';
import {HttpClientModule} from '@angular/common/http';
import {EditContributorComponent} from './edit-contributor/edit-contributor.component';

// jhipster-needle-angular-add-module-import JHipster will add new module here

const routes: Routes = [
    {path: 'new-contributor', component: NewContributorComponent},
    {path: 'edit-contributor/:id', component: EditContributorComponent},
];

@NgModule({
    imports: [
        BrowserModule,
        AppAppRoutingModule,
        Ng2Webstorage.forRoot({prefix: 'jhi', separator: '-'}),
        AppSharedModule,
        AppHomeModule,
        AppAdminModule,
        AppAccountModule,
        AppEntityModule,
        AppJobModule,
        HttpClientModule,
        RouterModule.forRoot(routes),

        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent,

    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService,
        ContributorService,
        JobService,
    ],
    bootstrap: [JhiMainComponent]
})
export class AppAppModule {
}
