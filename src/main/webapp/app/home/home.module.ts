import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppSharedModule} from '../shared';

import {HOME_ROUTE, HomeComponent} from './';
import {ListContributorsComponent} from '../list-contributors/list-contributors.component';
import {NewContributorComponent} from '../new-contributor/new-contributor.component';
import {EditContributorComponent} from "../edit-contributor/edit-contributor.component";

@NgModule({
    imports: [
        AppSharedModule,
        RouterModule.forChild([HOME_ROUTE])
    ],
    declarations: [
        HomeComponent,
        ListContributorsComponent,
        NewContributorComponent,
        EditContributorComponent,

    ],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppHomeModule {
}
