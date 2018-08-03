import {Route} from '@angular/router';

import {ListContributorsComponent} from './list-contributors.component';

export const LISTCONTRIBUTORS_ROUTE: Route = {
    path: '',
    component: ListContributorsComponent,
    data: {
        authorities: [],
        pageTitle: 'ListContributors.title'
    }

};
