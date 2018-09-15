import {Component, OnInit} from '@angular/core';
import {ContributorService} from '../shared/contributor/contributor.service';
import {Contributor} from '../shared/contributor/contributor.model';
import {Job} from '../shared/job/job.model';
import {JobService} from '../shared/job/job.service';
import {Router} from "@angular/router";

@Component({
    selector: 'jhi-new-contributor',
    templateUrl: './new-contributor.component.html',
    styleUrls: ['new-contributor.scss']
})
export class NewContributorComponent implements OnInit {
    newContributor: Contributor = {id: null, firstname: '', lastname: '', uid: ''};
    jobs: Job[];
    job: number = 4;

    constructor(private contributorService: ContributorService, private jobService: JobService, private router: Router) {

    }

    ngOnInit() {
        this.jobs = this.jobService.getJob();
        console.log('ssssssssss');
        console.log(this.jobs);
    }

    createContributor(uid: string, firstname: string, lastname: string) {
        if (this.newContributor.firstname && this.newContributor.lastname && this.newContributor.uid) {
            //this.newContributor.id = Math.random();
            this.contributorService.createContributor(this.newContributor).subscribe((newContributor) => {
                console.log(newContributor);
            });

        }

        else {
            alert('Please complete all the values.')
        }
    }


}

