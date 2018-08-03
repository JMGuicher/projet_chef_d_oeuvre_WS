import {Component, OnInit} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

import {Account} from '../shared';

@Component({
    selector: 'jhi-job',
    templateUrl: './job.component.html',
    styleUrls: [
        'job.scss'
    ]

})

export class JobComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;

    constructor() {

    }

    ngOnInit() {

    }

}
