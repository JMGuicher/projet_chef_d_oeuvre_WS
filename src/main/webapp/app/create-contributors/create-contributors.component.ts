import {Component, OnInit} from '@angular/core';
import {Contributor} from '../shared/contributor/contributor.model';

@Component({
    selector: 'jhi-create-contributors',
    templateUrl: 'create-contributors.component.html',
    styleUrls: ['create-contributors.scss']

})
export class CreateContributorsComponent implements OnInit {
    contributor: Contributor = {
        uid: '',
        firstname: '',
        lastname: ''
    }

    constructor() {
    }

    ngOnInit() {

    }

    create() {


    }

}
