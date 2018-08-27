import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppSharedModule} from '../shared';

import {HOME_ROUTE, HomeComponent} from './';
import {ListContributorsComponent} from '../list-contributors/list-contributors.component';
import {CreateContributorsComponent} from '../create-contributors/create-contributors.component';

@NgModule({
    imports: [
        AppSharedModule,
        RouterModule.forChild([HOME_ROUTE])
    ],
    declarations: [
        HomeComponent,
        ListContributorsComponent,
        CreateContributorsComponent
    ],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppHomeModule {
}
