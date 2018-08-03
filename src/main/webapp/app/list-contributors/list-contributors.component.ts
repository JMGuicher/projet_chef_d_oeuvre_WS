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

    contributors: Contributor[] = [{id: '1', lastName: 'truc', firstName: 'machin', uid: 'A2123'},
        {id: '2', lastName: 'Gabi', firstName: 'Gaboche', uid: 'G2435'},
        {id: '3', lastName: 'Pierre', firstName: 'Curie', uid: 'AS453'},
        {id: '4', lastName: 'Marie', firstName: 'Curie', uid: 'BR987'},
        {id: '5', lastName: 'Calvin', firstName: 'Clain', uid: '87654'},
        {id: '6', lastName: 'Jacquou', firstName: 'Chiracou', uid: '76454'},
        {id: '7', lastName: 'Pierre', firstName: 'Bellemaire', uid: '09871'},
        {id: '8', lastName: 'Claire', firstName: 'Chazoulle', uid: 'G29075'},
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
