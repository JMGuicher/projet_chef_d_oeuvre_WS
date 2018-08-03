import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppSharedModule} from '../shared';

import {JobComponent} from './job.component';
import {JOB_ROUTE} from './job.route';

@NgModule({
    imports: [
        AppSharedModule,
        RouterModule.forChild([JOB_ROUTE])
    ],
    declarations: [
        JobComponent,
    ],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppJobModule {
}
