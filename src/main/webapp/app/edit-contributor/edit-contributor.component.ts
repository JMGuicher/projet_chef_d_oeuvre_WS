import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContributorService} from '../shared/contributor/contributor.service';
import {Contributor} from '../shared/contributor/contributor.model';

@Component({
    selector: 'jhi-edit-contributor',
    templateUrl: './edit-contributor.component.html',
    styleUrls: ['edit-contributor.scss'],
})
export class EditContributorComponent implements OnInit {
    private sub: any;
    private idContrib: number;
    private firstNameContrib: String;
    editContributor: Contributor;

    constructor(private activatedRoute: ActivatedRoute, private contributorService: ContributorService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(mesparametres => {

            this.idContrib = mesparametres['id']; // (+) converts string 'id' to a number
            this.editContributor = this.contributorService.getContributorById(this.idContrib)
            // In a real app: dispatch action to load the details here.
            /*
                        this.firstNameContrib = mesparametres['firstName'];
                        this.editContributor = this.contributorService.getContributorByLastName(this.firstNameContrib)*/


        });


    }

}
