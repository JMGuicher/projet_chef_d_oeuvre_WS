import {Component, OnInit} from '@angular/core';
import {Contributor} from '../shared/contributor/contributor.model';
import {ContributorService} from '../shared/contributor/contributor.service';

@Component({
    selector: 'jhi-list-contributors',
    templateUrl: 'list-contributors.component.html',
    styleUrls: ['list-contributors.scss']

})
export class ListContributorsComponent implements OnInit {

    displayedColumns = ['Firstname', 'Lastname', 'UID'];

    contributors: Contributor[] = [{lastName: 'truc', firstName: 'machin', uid: 'A2123'},
        {lastName: 'Gabi', firstName: 'Gaboche', uid: 'G2435'}
    ];

    constructor(private contributorService: ContributorService) {
    }

    ngOnInit() {
        /*  this.displayContributors();*/
        console.log('list-contributors.init');

    }

    /*displayContributors() {
        this.contributorService.getPage(pageXOffset).subscribe((listContributors) => {
            this.contributors = listContributors;
        });
    }*/

}
