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

    deleteContributor(contributor: Contributor) {
        var index = CONTRIBUTORS.indexOf(contributor, 0);
        if (index > -1) {
            CONTRIBUTORS.splice(index, 1);
        }
    }

    getContributorById(id: number): Contributor {

        for (let i = 0; i < CONTRIBUTORS.length; i++) {
            if (id == CONTRIBUTORS[i].id) {
                return CONTRIBUTORS[i];
            }
        }
    }

    /*
          var index = CONTRIBUTORS.indexOf(contributor, 0);
            if (index > -1) {
                CONTRIBUTORS.splice(index, 1);
            }
     */
    /*getPage(page: number): Observable<Contributor[]> {
        return this.getPage<Contributor[]>(1);
    }*/
}
