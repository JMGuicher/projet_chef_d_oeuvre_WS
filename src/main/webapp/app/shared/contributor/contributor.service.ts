import {Injectable} from '@angular/core';

import {Contributor} from './contributor.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CONTRIBUTORS} from '../../mock-contributors';

@Injectable()
export class ContributorService {
    // private resourceUrl = SERVER_API_URL + 'api/contributors';
    API_URL = 'http://localhost:8080/api/contrib/contributors';

    constructor(private http: HttpClient) {

    }

    getContributors(): Observable<Contributor[]> {
        return this.http.get<Contributor[]>(this.API_URL);
    }

    addContributors(contributor: Contributor) {
        CONTRIBUTORS.push(contributor);
    }

    getContributorById(id: number): Contributor {

        for (let i = 0; i < CONTRIBUTORS.length; i++) {
            if (id == CONTRIBUTORS[i].id) {
                return CONTRIBUTORS[i];
            }
        }

    }

    deleteContributor(deletedContributor: Contributor): Observable<Contributor> {
        return this.http.delete(this.API_URL + '/' + deletedContributor.id);
    }

    createContributor(contributor: Contributor): Observable<Contributor> {
        return this.http.post<Contributor>(this.API_URL, contributor);
    }


}

/*  deleteContributor(contributor: Contributor) {
        var index = CONTRIBUTORS.indexOf(contributor, 0);
        if (index > -1) {
            CONTRIBUTORS.splice(index, 1);
        }
    }*/