import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppSharedModule} from '../shared';
import {AppListContributorModule} from '../list-contributors/list-contributors.module';

import {HOME_ROUTE, HomeComponent} from './';

@NgModule({
    imports: [
        AppSharedModule,
        AppListContributorModule,
        RouterModule.forChild([HOME_ROUTE])
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppHomeModule {
}
