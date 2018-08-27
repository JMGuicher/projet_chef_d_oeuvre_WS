import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'jhi-new-contributor',
    templateUrl: './new-contributor.component.html',
    styles: []
})
export class NewContributorComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

    create() {
        // eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfV
        // VNFUiIsImV4cCI6MTUzNTQ1MTE4NH0.F63TSxa3QNpWPwMwKUnl7Wchsrh4-sLlPULEX7Q1ZP1DMXBfW_De
        // myN2rr7Wvfn278t--CVmi1YQgeO3zyS7nA
        console.log('dsdssd')
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
