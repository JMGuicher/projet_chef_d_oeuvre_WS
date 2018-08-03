import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppSharedModule} from '../shared';

import {ListContributorsComponent} from './list-contributors.component';
import {LISTCONTRIBUTORS_ROUTE} from './list-contributors.route';

@NgModule({
    imports: [
        AppSharedModule,
        RouterModule.forChild([LISTCONTRIBUTORS_ROUTE])
    ],
    declarations: [
        ListContributorsComponent
    ]
})
export class AppListContributorModule {

}
