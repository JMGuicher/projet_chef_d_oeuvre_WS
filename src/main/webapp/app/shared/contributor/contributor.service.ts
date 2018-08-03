import {Injectable} from '@angular/core';

import {Contributor} from './contributor.model';

@Injectable()
export class ContributorService {

    selectedContributor: Contributor;

    constructor() {
    }

    /*getPage(page: number): Observable<Contributor[]> {
        return this.getPage<Contributor[]>(1);
    }*/
}
