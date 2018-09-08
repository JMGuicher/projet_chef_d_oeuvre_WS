import {Component, OnInit} from '@angular/core';
import {ContributorService} from '../shared/contributor/contributor.service';
import {CONTRIBUTORS} from '../mock-contributors';
import {Contributor} from '../shared/contributor/contributor.model';

@Component({
    selector: 'jhi-list-contributors',
    templateUrl: 'list-contributors.component.html',
    styleUrls: ['list-contributors.scss']

})
export class ListContributorsComponent implements OnInit {
    contributors = CONTRIBUTORS;
    newContributor = new Contributor();

    constructor(private contributorService: ContributorService) {
    }

    ngOnInit() {

    }

    deleteContributor(contributor: Contributor) {
        this.contributorService.deleteContributor(contributor);
    }


    /*displayContributors() {
        this.contributorService.getPage(pageXOffset).subscribe((listContributors) => {
            this.contributors = listContributors;
        });
    }*/

}

/*
this.http.get('http://localhost:9000/api/contrib/contributors', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUzNTQ1MTE4NH0.F63TSxa3QNpWPwMwKUnl7Wchsrh4-sLlPULEX7Q1ZP1DMXBfW_DemyN2rr7Wvfn278t--CVmi1YQgeO3zyS7nA'
            }
        }).subscribe((data: Contributor[]) => {
            this.contributors = data
        });
 */
