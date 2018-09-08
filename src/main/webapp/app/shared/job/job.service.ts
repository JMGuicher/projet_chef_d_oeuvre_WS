import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../app.constants';
import {JOB} from '../mock-job';

import {Http} from '@angular/http';
import {Job} from './job.model';

@Injectable()
export class JobService {
    private resourceUrl = SERVER_API_URL + 'api/users';

    constructor(private http: Http) {

    }

    getJob(): Job[] {
        return JOB;
    }

}
