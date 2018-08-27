import {Injectable} from '@angular/core';

import {Contributor} from './contributor.model';
import {SERVER_API_URL} from '../../app.constants';
import {Http} from '@angular/http';


@Injectable()
export class ContributorService {
    private resourceUrl = SERVER_API_URL + 'api/users';

    selectedContributor: Contributor;

    constructor(private http: Http) {

    }

    createContributors(contributor: Contributor) {
        return contributor;
    }


    /*getPage(page: number): Observable<Contributor[]> {
        return this.getPage<Contributor[]>(1);
    }*/
}
