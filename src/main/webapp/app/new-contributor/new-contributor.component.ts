import {Component, OnInit} from '@angular/core';
import {ContributorService} from '../shared/contributor/contributor.service';
import {Contributor} from "../shared/contributor/contributor.model";

@Component({
    selector: 'jhi-new-contributor',
    templateUrl: './new-contributor.component.html',
    styles: []
})
export class NewContributorComponent implements OnInit {
    newContributor = new Contributor();

    constructor(private contributorService: ContributorService) {

    }

    ngOnInit() {
    }

    addContributors() {

        if (this.newContributor.firstname && this.newContributor.lastname && this.newContributor.uid) {

            this.contributorService.addContributors(this.newContributor);
            this.newContributor = new Contributor();
        }

        else {
            alert('Thanks to complete all the values.')
        }

        /*
    create() {
        // eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfV
        // VNFUiIsImV4cCI6MTUzNTQ1MTE4NH0.F63TSxa3QNpWPwMwKUnl7Wchsrh4-sLlPULEX7Q1ZP1DMXBfW_De
        // myN2rr7Wvfn278t--CVmi1YQgeO3zyS7nA
        /*
        this.http.get('http://localhost:9000/api/contrib/contributors', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUzNTQ1MTE4NH0.F63TSxa3QNpWPwMwKUnl7Wchsrh4-sLlPULEX7Q1ZP1DMXBfW_DemyN2rr7Wvfn278t--CVmi1YQgeO3zyS7nA'
            }
        }).subscribe((data: Any) => {
        });
        */

    }
}
