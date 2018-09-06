import {Injectable} from '@angular/core';

import {Contributor} from './contributor.model';
import {SERVER_API_URL} from '../../app.constants';
import {Http} from '@angular/http';
import {CONTRIBUTORS} from '../../mock-contributors';

@Injectable()
export class ContributorService {
    private resourceUrl = SERVER_API_URL + 'api/users';

    constructor(private http: Http) {

    }

    addContributors(contributor: Contributor) {
        CONTRIBUTORS.push(contributor);
    }

    /*getPage(page: number): Observable<Contributor[]> {
        return this.getPage<Contributor[]>(1);
    }*/
}
