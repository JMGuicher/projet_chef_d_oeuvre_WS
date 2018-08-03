import {Route} from '@angular/router';

import {JobComponent} from './job.component';

export const JOB_ROUTE: Route = {
    path: '',
    component: JobComponent,
    data: {
        authorities: [],
        pageTitle: 'job.title'
    }
};
