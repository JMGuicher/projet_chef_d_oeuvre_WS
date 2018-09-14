import {Component, OnInit} from '@angular/core';
import {ContributorService} from '../shared/contributor/contributor.service';
import {Contributor} from "../shared/contributor/contributor.model";

@Component({
    selector: 'jhi-list-contributors',
    templateUrl: 'list-contributors.component.html',
    styleUrls: ['list-contributors.scss']

})
export class ListContributorsComponent implements OnInit {
    //contributors = CONTRIBUTORS;
    deletedContributor: Contributor = {id: null, lastname: '', firstname: ''};

    contributors: Contributor[] = new Array<Contributor>();

    constructor(private contributorService: ContributorService) {
    }

    ngOnInit() {
        this.getContributors()

    }

    deleteContributor(deletedContributor: Contributor) {
        this.contributorService.deleteContributor(this.deletedContributor).subscribe((deletedContributor) => {
            console.log(deletedContributor);
        })
    }

    getContributors() {
        this.contributorService.getContributors().subscribe((listOfContributors) => {
            this.contributors = listOfContributors;
            console.log('contributors')
        })

    }

}


/*deleteContributor(contributor: Contributor) {
       this.contributorService.deleteContributor(contributor);
   }*/